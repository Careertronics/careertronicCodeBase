"use client";
import { useState } from "react";

export default function JoinTalentGroups() {
  const [email, setEmail] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();

    const subject = "Join Community Request";
    const body = `Email: ${email}%0AInterested in joining the community`;

    window.location.href = `mailto:hr@careertronics.in?subject=${subject}&body=${body}`;
    setEmail(" ");
  };

  return (
    <section
      className="bg-gradient-to-b
from-[#000000]
via-[#3b0f2a]
to-[#0e0e11] overflow-hidden py-24 text-center"
    >
      <h2 className="text-3xl text-white font-bold">Join Our Talent Network</h2>

      <p className="mt-4 text-white">
        Send your resume and we will notify you when opportunities open.
      </p>

      <form
        onSubmit={handleJoin}
        className="mt-8 flex flex-col md:flex-row justify-center gap-4"
      >
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full md:w-96 rounded-lg"
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Join Community
        </button>
      </form>
    </section>
  );
}
