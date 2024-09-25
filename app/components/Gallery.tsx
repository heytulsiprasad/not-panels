'use client'; // Ensure this is a Client Component

import React from 'react';
import { ImageGallery } from 'react-image-grid-gallery';

type GalleryProps = {
  images: string[];
}

const WallpaperGallery: React.FC<GalleryProps> = ({ images }) => {
  // Ensure images are valid and filter out any undefined or empty values
  const formattedImages = images
    .filter((image) => image) // Filter out any falsy values
    .map((image) => ({
      src: image,
      alt: 'Wallpaper', // Optional alt text
      caption: 'Wallpaper Image', // Optional caption
    }));

  // Check if formattedImages is empty
  if (formattedImages.length === 0) {
    return <div className="text-center">No wallpapers available.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ImageGallery
        imagesInfoArray={formattedImages}
        columnCount="auto" // Adjust as needed
        columnWidth={230} // Adjust as needed
        gapSize={24} // Adjust as needed
      />
    </div>
  );
};

export default WallpaperGallery;