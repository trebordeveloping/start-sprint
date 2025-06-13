
import { useState } from 'react';

export default function StarRating(props: {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}) {

  const [hover, setHover] = useState<number>(0);

  const handleStarClick = (value: number) => {
    props.setRating(prev => {
      if (prev === value) {
        return 0; // Unselect if already selected
      }
      return value; // Set new rating
    })
    setHover(0); // Reset hover rating on click
  };
  const handleStarHover = (value: number) => setHover(value);
  const handleStarLeave = () => setHover(0);


  return (
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
            transform: hover === star ? 'scale(1.15)' : 'scale(1)',
            color: (hover || props.rating) >= star ? '#f59e42' : '#e5e7eb',
            filter: (hover || props.rating) >= star ? 'drop-shadow(0 2px 6px #f59e4280)' : 'none',
          }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span style={{ color: '#f59e42', fontWeight: 600, marginLeft: 8, fontSize: 16 }}>{props.rating > 0 ? props.rating : ''}</span>
    </div>
  );
}