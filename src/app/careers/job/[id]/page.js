import ApplyModal from "../../components/ApplyModal";
import { jobs } from "../../jobsData";

export default async function JobDetails({ params }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return <div className="p-20 text-center">Job not found</div>;
  }

  return (
    <div className="w-full bg-white py-32 border border-red-600 rounded-2xl  ">
      <div className="max-w-4xl mx-auto px-6 border border-red-600 rounded-2xl ">
        <h1 className="text-4xl mt-9 text-red-600 font-bold">{job.title}</h1>

        <p className="text-black mt-3">
          {job.department} • {job.location} • {job.type}
        </p>

        {/* Description */}

        <div className="mt-10">
          <h2 className="text-2xl text-red-600 font-semibold mb-4">
            Job Description
          </h2>

          <p className="text-black">{job.description}</p>
        </div>

        {/* Responsibilities */}

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Responsibilities
          </h2>

          <ul className="list-disc text-black pl-6 space-y-2">
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}

        <div className="mt-10">
          <h2 className="text-2xl text-red-600 font-semibold mb-4">
            Requirements
          </h2>

          <ul className="list-disc text-black pl-6 space-y-2">
            {job.requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
        <div></div>
        {/* Apply Button */}
        <div className="mt-10 mb-10 ">
          <ApplyModal jobTitle={job.title} />
        </div>
      </div>
    </div>
  );
}
