import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
  const galleryPath = path.join(process.cwd(), "public/gallery");
  const files = fs.readdirSync(galleryPath);

  const images = files.filter((file) =>
    [".jpg", ".jpeg", ".png", ".webp"].includes(
      path.extname(file).toLowerCase(),
    ),
  );

  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-10">
      <h1 className="text-3xl font-semibold mb-8 text-center">Our Gallery</h1>

      {/* Pass images to client component */}
      <GalleryClient images={images} />
    </div>
  );
}
