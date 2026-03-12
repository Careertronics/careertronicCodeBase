import { jobs } from "../jobsData";
import JobCard from "../JobCard";

export default function OpenPosition() {
  return (
    <section id="jobs" className="w-full bg-white py-32 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-red-600 mb-10">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
