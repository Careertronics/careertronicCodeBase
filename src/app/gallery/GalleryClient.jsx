"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryClient({ images }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:scale-105 transition duration-300"
            onClick={() => setSelectedImg(img)}
          >
            <Image
              src={`/gallery/${img}`}
              alt={`Gallery ${index}`}
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full p-4">
            <Image
              src={`/Gallery/${selectedImg}`}
              alt="Full Image"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              unoptimized
            />

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white px-3 py-1 rounded"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
