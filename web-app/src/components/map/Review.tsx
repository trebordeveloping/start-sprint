import React from 'react';

import type { Place } from '../../utils/types';

import { useUser } from '../../contexts/UserContext';

interface ReviewModalProps {
  place: Place;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  // Add more props as needed later
}

const modalStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9000,
};

const modalContentStyles: React.CSSProperties = {
  background: '#fff',
  borderRadius: 8,
  padding: 24,
  minWidth: 320,
  maxWidth: '90vw',
  boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
};

export default function ReviewModal({ visible, setVisible, place }: ReviewModalProps) {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const [comment, setComment] = React.useState('');

  const { submitReview } = useUser();

  if (!visible) return null;

  const handleStarClick = (value: number) => {
    setRating(prev => {
      if (prev === value) {
        return 0; // Unselect if already selected
      }
      return value; // Set new rating
    })
    setHoverRating(0); // Reset hover rating on click
  };
  const handleStarHover = (value: number) => setHoverRating(value);
  const handleStarLeave = () => setHoverRating(0);

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
    setComment('');
    setHoverRating(0);
  }

  const isDisabled = rating === 0 || comment.trim() === '';

  return (
    <div style={modalStyles}>
      <div style={{ ...modalContentStyles, padding: 0, maxWidth: 420, overflow: 'hidden' }}>
        {/* Header with image and close */}
        <div style={{ position: 'relative', height: 160, background: '#f3f4f6' }}>
          <img
            src={place.imageUrl}
            alt={place.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
          />
        </div>
        {/* Place info */}
        <div style={{ padding: 24, paddingTop: 18 }}>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#1f2937' }}>{place.name}</h2>
          <div style={{ color: '#6b7280', fontSize: 15, marginBottom: 8, marginTop: 2 }}>
            📍 {place.location.city}, {place.location.country}
          </div>
          <div style={{ color: '#374151', fontSize: 15, marginBottom: 16 }}>{place.description}</div>
          {/* Star rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                style={{
                  width: 32,
                  height: 32,
                  cursor: 'pointer',
                  transition: 'transform 0.15s',
                  transform: hoverRating === star ? 'scale(1.15)' : 'scale(1)',
                  color: (hoverRating || rating) >= star ? '#f59e42' : '#e5e7eb',
                  filter: (hoverRating || rating) >= star ? 'drop-shadow(0 2px 6px #f59e4280)' : 'none',
                }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span style={{ color: '#f59e42', fontWeight: 600, marginLeft: 8, fontSize: 16 }}>{rating > 0 ? rating : ''}</span>
          </div>
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