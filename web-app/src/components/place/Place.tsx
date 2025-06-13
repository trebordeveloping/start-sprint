import type { Place } from '../../utils/types';

export default function PlaceSection(props: {
  place: Place;
  startReview: () => void;
}) {

  console.log(props.place.name, props.place.name.length)

  return (

    <div className="max-w-2xl w-full h-full flex flex-col bg-white/95 rounded-3xl shadow-2xl p-8 relative border border-gray-200">
      <img src={props.place.imageUrl} alt={props.place.name} className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6" />
      <div className="flex items-center justify-between mb-2">
        <h1 style={{ fontSize: props.place.name.length > 12 ? 28 : 32 }} className={`text-3xl font-bold text-gray-900`}>{props.place.name}</h1>
        {props.place.reviews && (
          <div className="flex items-center bg-orange-50 rounded-full px-4 py-1 shadow text-orange-600 font-semibold text-lg">
            <span className="mr-1">★</span>{props.place.reviews.rating}
            <span className="text-gray-500 text-sm ml-2">({props.place.reviews.total})</span>
          </div>
        )}
      </div>
      <div className="text-gray-600 mb-4 text-lg">{props.place.description}</div>
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-orange-100 text-orange-700 rounded-full px-3 py-1 text-sm font-medium">{props.place.cost} credits</span>
        <span className="text-gray-500">📍 {props.place.location.city}, {props.place.location.country}</span>
      </div>
      <div className="flex items-center justify-between gap-4 mt-2">
        <a
          href={props.place.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-500 !text-white rounded-full font-semibold shadow hover:bg-orange-600 transition-all flex items-center gap-2"
        >
          {/* Pin Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1110 5a2.5 2.5 0 010 5.5z" />
          </svg>
          <span className="block">Directions</span>

        </a>
        <button
          className="px-6 py-3 !bg-orange-500 !text-white rounded-full font-semibold shadow hover:bg-orange-600 transition-all flex items-center gap-2"
          onClick={props.startReview}
        >
          {/* Pad and Pen Icon */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.75 18.963l-4 1 1-4 12.112-12.476z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 6l3 3" />
          </svg>
          <span className="hidden md:block">Add Your</span> Review
        </button>
      </div>
    </div>
  )
}