import moment from 'moment';
import WishCard from "../WishCard/WishCard";

const format = (date) => {
  return moment(date).format("MMMM D, YYYY [at] h:mm A");
}

function MasonryWishGrid({ wishes = [] }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3  gap-4 p-4">
      {wishes.map((wish, index) => (
        <div key={index} className="p-4 rounded-lg break-inside-avoid shadow-md border border-white text-white bg-gray-20 mb-4">
          <WishCard whoSend={wish?.sender} createdAt={format(wish?.createdAt)} message={wish?.message} />
        </div>
      ))}
    </div>
  );
}

export default MasonryWishGrid;
