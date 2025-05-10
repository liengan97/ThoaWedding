import { useState } from "react";

export default function MasonryGallery({ images }) {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, 6); // Show limited initially

  return (
    <div class="relative">
      {/* Masonry Grid */}
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <img key={index} src={image.src.src} alt="Gallery Item" class="w-full rounded-lg shadow-md" />
        ))}
      </div>

      {/* View All Button */}
      {!showAll && (
        <div class="absolute top-1/2 left-0 w-full h-1/2 bg-black/50 flex justify-center items-center">
          <button 
            class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600" 
            onClick={() => setShowAll(true)}
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
}
