import Link from "next/link";

export default function InternshipProgram() {
  return (
    <section
      className="w-full bg-gradient-to-b
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000] py-20"
    >
      <div className="py-20 text-center">
        <h2 className="text-5xl font-bold">Internship Program</h2>

        <p className="mt-6 text-xl text-white max-w-xl mx-auto">
          Kickstart your tech career with real projects and mentorship.
        </p>

        <Link href={"/internship"}>
          {" "}
          <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg">
            Explore Internships
          </button>
        </Link>
      </div>
    </section>
  );
}
