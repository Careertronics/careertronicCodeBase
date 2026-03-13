import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <Link href={`/careers/job/${job.id}`}>
      <div className="border border-red-600 rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
        <h3 className="text-xl text-red-600 font-semibold">{job.title}</h3>

        <p className="text-sm text-black mt-1">
          {job.department} • {job.location} • {job.type}
        </p>

        <p className="mt-4 text-black">{job.description}</p>
        <br />
        <br />
        <span className="border border-red-600 text-red-600 px-6 py-3 mt-2 rounded-lg font-semibold hover:bg-indigo-50 transition">
          View Details
        </span>
      </div>
    </Link>
  );
}
