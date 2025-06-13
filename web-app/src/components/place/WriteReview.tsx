import React from 'react';

import StarRating from './StarRating';
import PlatformRating from './PlatformRating';

import type { Place } from '../../utils/types';

import { useUser } from '../../contexts/UserContext';

interface ReviewModalProps {
  place: Place;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  // Add more props as needed later
}

export default function WriteReview({ visible, setVisible, place }: ReviewModalProps) {
  const [rating, setRating] = React.useState(0);
  const [platformRating, setPlatformRating] = React.useState<boolean | null>(null);
  const [comment, setComment] = React.useState('');
  const [media, setMedia] = React.useState<File[] | null>(null);

  const { submitReview } = useUser();

  if (!visible) return null;

  const handleSubmit = (e: React.MouseEvent) => {
    if (rating > 0 && comment.trim()) {
      e.stopPropagation();
      submitReview(place.id, rating, comment);
      setVisible(false); // Close modal after submission
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
    setRating(0);
    setPlatformRating(null);
    setComment('');
  }

  const isDisabled = rating === 0 || platformRating === null || comment.trim() === '';

  return (
    <div
      style={{ background: 'rgba(0, 0, 0, 0.4)' }}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-9000"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-8 min-width-320 max-w-[90vw] max-h-[90vh] overflow-y-auto"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Header with new title and close */}
        <div style={{ padding: 24, paddingBottom: 0 }}>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 700, color: '#1f2937' }}>Your Review of {place.name}</h2>
        </div>

        {/* Review form */}
        <div style={{ padding: 24, paddingTop: 12 }}>
          {/* Star rating */}
          <p className="mb-2">How was your overall experience?</p>
          <StarRating
            rating={rating}
            setRating={setRating}
          />
          <p className="mb-2">Does this place deserve to be on our platform?</p>
          <PlatformRating
            value={platformRating}
            setValue={setPlatformRating}
          />
          {/* Comment box */}
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Add your comments..."
            rows={4}
            style={{
              width: '100%',
              borderRadius: 6,
              border: '1px solid #e5e7eb',
              padding: 10,
              fontSize: 15,
              color: '#374151',
              background: '#f9fafb',
              resize: 'vertical',
              marginBottom: 18,
              outline: 'none',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            }}
          />
          {/* Upload media */}
          <p className="mb-2">You can also upload photos or videos to support your review.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <input
              type="file"
              accept="image/*,video/*"
              style={{ display: 'none' }}
              id="media-upload"
              multiple
              onChange={e => {
                if (e.target.files) {
                  setMedia(Array.from(e.target.files));
                }
              }}
            />
            <label
              htmlFor="media-upload"
              style={{
                padding: '8px 16px',
                borderRadius: 6,
                border: '1px solid #e5e7eb',
                background: '#f3f4f6',
                color: '#374151',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: 15,
              }}
            >
              Upload Media
            </label>
            {/* Show uploaded media count */}
            {media && media.length > 0 ? (
              <span style={{ color: '#6b7280', fontSize: 14 }}>
                {media.length} file{media.length > 1 ? 's' : ''} selected
              </span>
            ) : (
              <span style={{ color: '#6b7280', fontSize: 14 }}>Max size: 10MB</span>
            )}
          </div>
          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <button
              onClick={handleClose}
              style={{ padding: '7px 20px', borderRadius: 5, border: '1px solid #e5e7eb', background: '#f3f4f6', color: '#374151', fontWeight: 500, cursor: 'pointer', fontSize: 15 }}
            >
              Cancel
            </button>
            <button
              style={{ padding: '7px 20px', borderRadius: 5, border: 'none', fontWeight: 600, fontSize: 15, boxShadow: '0 2px 8px #f59e4230' }}
              className={`transition-colors duration-200 text-white
                ${isDisabled
                  ? '!bg-orange-300 !cursor-not-allowed'
                  : '!bg-orange-500 hover:!bg-orange-600 text-white cursor-pointer'}
                  `}
              onClick={handleSubmit}
              disabled={isDisabled}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}