import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const res = await fetch(
    "https://res.cloudinary.com/dxt1eap0l/image/list/galleryImg.json",
    { cache: "no-store" },
  );

  if (!res.ok) {
    console.error("Cloudinary fetch failed");
    return <div>Error loading gallery</div>;
  }

  const text = await res.text();

  if (!text) {
    console.error("Empty response from Cloudinary");
    return <div>No images found</div>;
  }

  const data = JSON.parse(text);

  const images = data.resources.map(
    (img) =>
      `https://res.cloudinary.com/dxt1eap0l/image/upload/${img.public_id}`,
  );

  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-10">
      <h1 className="text-3xl font-semibold mb-8 text-center">Our Gallery</h1>

      <GalleryClient images={images} />
    </div>
  );
}
