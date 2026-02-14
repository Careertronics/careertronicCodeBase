import React from "react";
import Button from "../UI/button";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

function MindsBehind() {
  return (
    <div className="bg-white text-black py-10 px-4 text-center">
      <h2 className="text-3xl font-bold inline-block relative pb-2">
        The Minds Behind <span className="text-red-500">CAREERTRONIC</span> TEAM
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></div>
      </h2>
      <p className="max-w-3xl mx-auto text-base sm:text-xl leading-relaxed my-16">
        At Careertronic Global Services, our strength lies in our skilled and
        passionate team, dedicated to delivering innovative solutions for your
        success. From software developers and IT trainers to business
        consultants and education advisors, we bring expertise across all our
        services. We collaborate, innovate, and grow, ensuring cutting-edge
        solutions tailored to your needs. With a commitment to continuous
        learning, we stay ahead of industry trends to drive your success.
      </p>
      <div className="mt-6">
        <Link href={"/ourteam"}>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
            Meet Our Team
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MindsBehind;
