import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-b
from-[#000000]
via-[#3b0f2a]
to-[#0e0e11] overflow-hidden py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}

        <div>
          <h1 className="text-6xl md:text-5xl font-bold text-white leading-tight">
            Careers at <span className="text-red-600">Careertronic</span>
          </h1>

          <p className="mt-6 text-lg text-white max-w-lg">
            Join our passionate team building innovative technology solutions,
            training future engineers, and helping businesses scale through AI,
            cloud, and modern software development.
          </p>

          {/* CTA BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#jobs"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              View Open Positions
            </a>

            <a
              href="/internship"
              className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Internship Program
            </a>
          </div>

          <p className="mt-6 text-sm text-white">
            Work with innovators, mentors, and engineers shaping the future of
            technology.
          </p>

          {/* COMPANY STATS */}

          <div className="mt-10 flex gap-10 flex-wrap">
            <div>
              <p className="text-2xl font-bold text-red-600">12k+</p>
              <p className="text-sm text-white">Professionals Trained</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-red-600">500+</p>
              <p className="text-sm text-white">Industry Partners</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-red-600">95%</p>
              <p className="text-sm white ">Placement Success</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="relative w-full h-[420px]">
          <Image
            src="https://res.cloudinary.com/dxt1eap0l/image/upload/v1773305168/ChatGPT_Image_Mar_12_2026_02_08_13_PM_xstsl3.png"
            alt="Careertronic Careers"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
