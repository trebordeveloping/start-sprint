import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';

import Credits from '../components/Credits';
import Login from '../components/Login';
import Place from '../components/place/Place';
import Gallery from '../components/place/Gallery';
import Reviews from '../components/place/Reviews';
import WriteReview from '../components/place/WriteReview';

import { useUser } from '../contexts/UserContext';

import { places } from '../data/places';
import SectionNav from './SectionNav';

export default function PlacePage() {
  const params = useParams();
  const placeId = params.placeId as string;
  const { currentUser } = useUser();
  const navigate = useNavigate();
  const place = places.find(p => p.id === placeId);
  const isUnlocked = currentUser?.unlockedPlaces.includes(placeId) || false;

  const [section, setSection] = useState<'gallery' | 'reviews'>('gallery');
  const [showReviewModal, setShowReviewModal] = useState(false);

  if (!place) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="bg-white/90 rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Place Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find this place.</p>
          <button onClick={() => navigate('/map')} className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition-all">Back to Map</button>
        </div>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="bg-white/90 rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Place Locked</h2>
          <p className="text-gray-600 mb-6">You need {place.cost} credits to unlock this place.</p>
          <button onClick={() => navigate('/map')} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold shadow hover:bg-gray-200 transition-all">Back to Map</button>
        </div>
      </div>
    );
  }



  return (
    <div className="h-screen w-screen bg-gradient-to-br from-orange-50 to-orange-100 flex pt-12 overflow-y-auto md:overflow-y-hidden">
      
      {/* Top Bar */}
      <button
        onClick={() => navigate('/map')}
        className="absolute top-4 left-4 p-3 bg-white/90 text-gray-700 rounded-full shadow hover:bg-white transition-all z-10">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      <div className="absolute top-4 right-4 z-10">
        {currentUser ? <Credits /> : <Login />}
      </div>

      {/* Main Content */}

      <WriteReview
        place={place}
        visible={showReviewModal}
        setVisible={setShowReviewModal}
      />


      <div className="w-full h-full md:h-[calc(100vh-64px)] max-w-8xl px-4 py-8
        flex flex-col items-center gap-8
        md:flex-row md:items-start md:justify-center"
      >
        
        <Place
          place={place}
          startReview={() => setShowReviewModal(true)}
        />

        <div className="max-w-2xl w-full h-full flex flex-col bg-white/90 rounded-2xl shadow-lg border border-gray-100">
          
          <SectionNav section={section} setSection={setSection} />

          <div className="flex-1 p-4 overflow-y-auto">
            {section === 'gallery' && (
              <Gallery name={place.name} />
            )}
            {section === 'reviews' && (
              <Reviews placeId={place.id} />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
