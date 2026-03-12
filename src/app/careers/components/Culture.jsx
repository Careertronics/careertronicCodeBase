export default function Culture() {
  return (
    <section
      className="bg-gradient-to-b
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000]

 py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-10">
          Life at <span className="text-red-600">Careertronic</span>
        </h2>

        <p className="text-center text-white max-w-3xl mx-auto">
          We believe innovation happens when passionate people collaborate. Our
          culture focuses on learning, mentoring and building impactful
          solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg p-6 text-center">
            <h3 className="text-xl text-red-600 font-semibold mb-3">
              Collaborative Innovation
            </h3>
            <p className="text-black text-sm">
              At Careertronic, we believe the best ideas emerge from teamwork.
              Our engineers and innovators collaborate to build solutions in AI,
              cloud computing, and full-stack development.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <h3 className="text-xl text-red-600 font-semibold mb-3">
              Continuous Learning
            </h3>
            <p className="text-black text-sm">
              Learning never stops at Careertronic. From workshops to
              knowledge-sharing sessions, our team constantly upgrades their
              skills to stay ahead in evolving technologies.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <h3 className="text-xl text-red-600 font-semibold mb-3">
              Building Real Impact
            </h3>
            <p className="text-black text-sm">
              Every project and every student we mentor contributes to shaping
              the future of technology professionals and digital innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
