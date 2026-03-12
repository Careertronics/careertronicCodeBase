export default function HiringProcess() {
  const steps = [
    "Apply Online",
    "Initial Screening",
    "Technical Interview",
    "Final Interview",
    "Offer & Onboarding",
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl text-red-600 font-bold text-center mb-10">
        Hiring Process
      </h2>

      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="border border-red-600 p-6 rounded-xl text-center"
          >
            <div className="text-red-600 font-bold text-xl">{i + 1}</div>

            <p className="mt-2 text-black text-lg">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
