import { GraduationCap, Code2, Globe, TrendingUp } from "lucide-react";

export default function WhyWorkHere() {
  const perks = [
    {
      title: "Learning Culture",
      desc: "Continuous upskilling and mentorship.",
      icon: <GraduationCap size={36} className="text-white mb-4" />,
    },
    {
      title: "Real Projects",
      desc: "Work on enterprise and AI solutions.",
      icon: <Code2 size={36} className="text-white mb-4" />,
    },
    {
      title: "Flexible Work",
      desc: "Remote friendly culture.",
      icon: <Globe size={36} className="text-white mb-4" />,
    },
    {
      title: "Career Growth",
      desc: "Opportunities to grow into leadership roles.",
      icon: <TrendingUp size={36} className="text-white mb-4" />,
    },
  ];

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-black text-center">
          Why Work With <span className="text-red-600">Careertronic</span>
        </h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-16 rounded"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {perks.map((p, i) => (
            <div
              key={i}
              className="
              p-6 rounded-xl
              bg-gradient-to-br
              from-[#0e0e11]
              via-[#3b0f2a]
              to-[#000000]
              text-white
              shadow-lg
              transition
              duration-300
              hover:scale-105
              hover:shadow-2xl
              min-h-[180px]
              "
            >
              {p.icon}

              <h3 className="font-semibold text-lg">{p.title}</h3>

              <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
