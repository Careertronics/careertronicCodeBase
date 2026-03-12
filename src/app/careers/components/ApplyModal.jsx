"use client";

import { useState } from "react";

export default function ApplyModal({ jobTitle }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Apply Button */}

      <button
        onClick={() => setOpen(true)}
        className="mt-10 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
      >
        Apply for this Role
      </button>

      {/* Modal */}

      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 text-xl"
            >
              ✕
            </button>

            {/* Title */}

            <h2 className="text-2xl text-red-600 font-bold text-center mb-6">
              Apply for {jobTitle}
            </h2>

            <p className="text-sm text-black text-center mb-4">
              Upload your resume to Google Drive and paste the link below.
            </p>

            {/* Form */}

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              {/* Web3Forms Key */}

              <input
                type="hidden"
                name="access_key"
                value="c821188b-ce06-4d31-b732-818ea907ac99"
              />

              {/* Email Subject */}

              <input
                type="hidden"
                name="subject"
                value={`New Job Application for ${jobTitle}`}
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border text-black p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full  text-black border p-3 rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full  text-black border p-3 rounded-lg"
              />

              {/* Resume Link */}

              <input
                type="url"
                name="resume_link"
                placeholder="Paste Resume Link (Google Drive / Dropbox)"
                required
                className="w-full  text-black border p-3 rounded-lg"
              />

              <textarea
                name="message"
                placeholder="Tell us about yourself"
                rows="3"
                className="w-full border  text-black p-3 rounded-lg"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
