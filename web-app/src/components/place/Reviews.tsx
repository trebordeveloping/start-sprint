
import { useUser } from "../../contexts/UserContext";
import { reviews } from "../../data/reviews";
import type { Review } from "../../utils/types";

const Review = ({ review, idx, currentUser }: {
  review: Review;
  idx: number;
  currentUser: { id: string; name: string; }
}) => (
  <div className={`py-4 ${idx === 0 ? '' : 'pt-6'}`}>
    <div className="flex items-center gap-3 mb-1">
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-100 text-orange-700 font-bold text-lg">
        {review.userId.slice(0, 2).toUpperCase()}
      </span>
      <div className="flex flex-col">
        {(review.userId === currentUser.id) ? (
          <span className="font-semibold text-gray-800 text-base">
            {currentUser.name}
          </span>
        ) : (
          <span className="font-semibold text-gray-800 text-base">
            User {review.userId.slice(0, 4)}
          </span>
        )}
        <span className="text-xs text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="ml-auto flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-orange-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.342 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
      </div>
    </div>
    <div className="text-gray-700 text-base mt-2">{review.comment}</div>
  </div>
);

export default function Reviews(props: {
  placeId: string;
}) {

  const { currentUser } = useUser();

  const userReviews = currentUser?.reviews.filter(
    review => review.placeId === props.placeId
   ) || [];

  const reviewsForPlace = [...userReviews, ...reviews.filter(
    review => review.placeId === props.placeId
  )].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (reviewsForPlace.length === 0) {
    return (
      <div className="text-gray-400 text-center py-8">Be the first to upload an image or video!</div>
    )
  }

  return (
    <div className="divide-y divide-gray-200 flex-1 overflow-y-auto">
      {reviewsForPlace.map((review, idx) => (
        <Review
          key={review.id}
          review={review}
          idx={idx}
          currentUser={{ id: currentUser?.id || '', name: currentUser?.name || '' }}
        />
      ))
      }
    </div>
  );
}