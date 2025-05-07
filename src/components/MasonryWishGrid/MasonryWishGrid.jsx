import WishCard from "../WishCard/WishCard";
import { formatWishDate } from '@/utils/date.util';

function MasonryWishGrid({ wishes = [] }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3  gap-4 p-4">
      {wishes.map(wish => (
        <div key={wish.id} className="p-4 rounded-lg break-inside-avoid shadow-md border border-white text-white bg-gray-20 mb-4">
          <WishCard whoSend={wish?.sender} createdAt={formatWishDate(wish?.atUtc)} message={wish?.message} />
        </div>
      ))}
    </div>
  );
}

export default MasonryWishGrid;
