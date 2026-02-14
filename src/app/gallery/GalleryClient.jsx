"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function GalleryClient({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-xl border border-white/10 
                       hover:scale-105 hover:border-white/20 transition duration-300"
            onClick={() => setSelectedIndex(index)}
          >
            {/* Fixed aspect ratio box (prevents layout break) */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={`/Gallery/${img}`}
                alt={`Gallery ${index}`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <Image
              src={`/Gallery/${images[selectedIndex]}`}
              alt="Full Image"
              width={1400}
              height={900}
              className="w-full h-auto rounded-lg object-contain"
              unoptimized
            />

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white px-3 py-1 rounded-md"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Optional: image counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm text-white/80">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
