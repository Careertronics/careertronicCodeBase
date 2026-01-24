"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import StickyFranchiseButtons from "@/components/StickyFranchiseButtons";
export default function BecomeAFranchise() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const faqs = [
    {
      question: "Is Careertronic a degree-awarding institute?",

      answer:
        "No. Careertronic offers certification-based and industry-aligned programs. It does not award statutory degrees.",
    },
    {
      question: "Do I need prior experience in IT or training?",
      answer:
        "No. Careertronic provides complete academic and operational support.",
    },
    {
      question: "What is the minimum space required for a centre?",
      answer:
        "Typically, a minimum of 1,500 sq. ft. is recommended, subject to city and centre model.",
    },
    {
      question: "Will Careertronic support marketing and admissions?",
      answer:
        "Yes. Central branding, digital marketing frameworks, and campaign support are provided.",
    },
    {
      question: "Which cities are suitable for a Careertronic franchise?",
      answer:
        "Careertronic centres are suitable for Tier I, Tier II, and Tier III cities across India.",
    },
  ];

  const benefits = [
    {
      title: "Low-Risk, High-Reward Opportunity",
      description:
        "With a proven business model and growing demand, franchisees can expect a strong ROI and a sustainable, profitable business.",
    },
    {
      title: "National and Global Reach",
      description:
        "The demand for IT skills, education consulting, and outsourcing solutions is expanding. Serve local, national, and international markets.",
    },
    {
      title: "Marketing & Advertising Support",
      description:
        "Leverage CGSPL's brand presence through digital campaigns, promotional materials, and corporate tie-ups to grow quickly.",
    },
    {
      title: "Comprehensive Operational Tools",
      description:
        "Access our CRM system, online learning platform, and e-commerce solutions to streamline operations and enhance customer experience.",
    },
  ];

  const steps = [
    {
      img: "/franchise/institute.png",
      title: "Existing training institutes upgrading their brand",
    },
    {
      img: "/franchise/Professional.png",
      title: "Professionals passionate about skill development",
    },
    {
      img: "/franchise/investor.png",
      title: "Investors seeking scalable education businesses",
    },
    {
      img: "/franchise/Eval.png",
      title: "No prior training delivery experience is mandatory",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Become a Franchise Partner | Careertronic Global Services</title>
        <meta
          name="description"
          content="Join the Careertronic family and unlock your entrepreneurial potential with our proven franchise opportunity in IT training, global education, and business outsourcing services."
        />
      </Head>
      <StickyFranchiseButtons />
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: "url(/franchise/hero.png)" }}
        />

        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/65"></div> */}

        {/* Subtle brand gradient on top */}
        <div
          className="absolute inset-0 bg-gradient-to-b
    from-black
    via-[#3b0f2a]/60
    
    to-black/70"
        ></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 z-10">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">
              FRANCHISE WITH
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-white  p-6 mb-6">
              Careertronic Skill & Technology Centre
            </h1>
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={250}
            index={1}
            stagger={150}
          >
            <p className="text-xl text-white max-w-2xl">
              Research-Driven. Industry-Aligned.
            </p>
          </ScrollReveal>
          <ScrollReveal
            animation="slideLeft"
            duration={1000}
            easing="spring"
            delay={400}
            index={2}
            stagger={150}
          >
            {/* <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg">
              Apply Now
            </button> */}
          </ScrollReveal>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal
            animation="slideUp"
            duration={900}
            easing="spring"
            delay={100}
            index={0}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Build a profitable and future-proof
              <span className="text-red-700 mt-2"> Education Business</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal
            animation="fade"
            duration={900}
            easing="spring"
            delay={250}
            index={1}
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Careertronic Skill & Technology Centre — a next-generation
              technology training ecosystem backed by strong curriculum,
              centralized systems, and continuous academic support.
            </p>
          </ScrollReveal>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT: CONTENT */}
            <div>
              <ScrollReveal
                animation="slideRight"
                duration={900}
                easing="spring"
                delay={100}
                index={0}
              >
                <h3 className="text-sm font-semibold text-red-700 tracking-widest mb-3 uppercase">
                  About the Brand
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Careertronic Global Services Pvt. Ltd.
                </h2>
              </ScrollReveal>

              <ScrollReveal
                animation="slideLeft"
                duration={900}
                easing="spring"
                delay={250}
                index={1}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Careertronic Skill & Technology Centre is a premium technology
                  training and skill development initiative of Careertronic
                  Global Services (P) Ltd. The brand focuses on advanced and
                  emerging technologies, employability-driven programs, and
                  industry-aligned learning delivery.
                  <br />
                  <br />
                  Our centres operate within a research-backed academic
                  framework, ensuring curriculum relevance, consistency in
                  delivery, and long-term sustainability for franchise partners.
                </p>
              </ScrollReveal>
            </div>

            {/* RIGHT: BIG LOGO */}
            <div className="flex justify-center md:justify-end">
              <ScrollReveal
                animation="zoomIn"
                duration={900}
                easing="spring"
                delay={300}
                index={2}
              >
                <div className="relative">
                  <img
                    src="/logo/logo.png"
                    alt="Careertronic Logo"
                    className="w-64 md:w-80 opacity-90"
                  />

                  <div className="absolute inset-0 bg-red-700/10 blur-3xl rounded-full -z-10"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section - Black Background */}
      <section
        className="py-16 px-4 bg-gradient-to-b
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal
              animation="slideRight"
              duration={1000}
              easing="spring"
              delay={100}
              index={0}
              stagger={150}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Careertronic Franchise?
              </h2>
            </ScrollReveal>
            <ScrollReveal
              animation="slideRight"
              duration={1000}
              easing="spring"
              delay={250}
              index={1}
              stagger={150}
            >
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Careertronic is not a conventional IT training institute. It is
                a structured technology education ecosystem designed for scale,
                quality, and profitability.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "🏆",
                title: "Proven Business Model",
                description:
                  "CGSPL has developed a strong and scalable business model across IT training, global education, BPO/KPO outsourcing, and industrial automation, providing our franchise partners with the tools and resources to thrive.",
              },
              {
                emoji: "🎓",
                title: "Research-driven and industry-aligned curriculum",
                description:
                  "Careertronic follows a research-driven, industry-aligned curriculum approach that evolves with technology and workforce needs.",
              },
              {
                emoji: "🌐",
                title: "Centralized ERP, LMS, and Franchise Command Centre",
                description:
                  "Careertronic operates a centralized ERP, LMS, and Franchise Command Centre to ensure standardized operations, academic consistency, and real-time oversight across all centres.",
              },
              {
                emoji: "📈",
                title: "Premium positioning in the skill development market",
                description:
                  "Careertronic operates in the premium segment of the skill development market, driven by quality, credibility, and learner outcomes.",
              },
              {
                emoji: "🕰️",
                title:
                  "Continuous academic, operational, and marketing support",
                description:
                  "Careertronic operates in the premium segment of the skill development market, driven by quality, credibility, and learner outcomes.",
              },
              {
                emoji: "📱",
                title: "Strong brand credibility with industry-backed outcomes",
                description:
                  "Leverage CGSPL's brand presence through digital marketing campaigns, promotional materials, and corporate tie-ups to attract customers and grow quickly.",
              },
            ].map((item, index) => (
              <ScrollReveal
                key={index}
                animation="slideRight"
                duration={1000}
                easing="spring"
                delay={100 + index * 150}
                index={index}
                stagger={150}
              >
                <div className="bg-gray-900 p-8 rounded-xl shadow-lg h-full flex flex-col">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-red-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 flex-grow">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Revenue Streams Section - White Background  bg-white */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal
            animation="slideBottom"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h2 className="text-4xl font-bold text-red-700 mb-6 text-center">
              PROGRAMS OFFERED
            </h2>
            <p className="text-xl font-bold text-red-700  text-center mb-10">
              Careertronic Skill and Technology Centres deliver high-demand
              programs in
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-4">
            {[
              "Artificial Intelligence & Machine Learning",
              "Data Science & Data Analytics",
              "Full Stack Development",
              "Cloud Computing & DevOps",
              "Cyber Security & Ethical Hacking",
              "Industrial Automation & Industry 4.0",
              "Emerging Technology Certification Programs",
            ].map((item, index) => (
              <ScrollReveal
                key={index}
                animation="slideUp"
                duration={700}
                easing="spring"
                delay={index * 80}
                index={index}
              >
                <div className="px-5 py-3 border rounded-full">
                  <span className="text-sm font-medium text-red-700">
                    {item}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: "IT",
                title: "IT Training Services",
                description: "Offer cutting-edge courses in:",
                items: [
                  "Data Science & Artificial Intelligence",
                  "Cloud Computing & DevOps",
                  "Cybersecurity & Network Security",
                  "Web & Mobile Development",
                ],
              },
              {
                id: "EDU",
                title: "Global Education Services",
                description: "Generate revenue through:",
                items: [
                  "Career Counseling Services",
                  "Visa Processing & Documentation",
                  "Study Abroad Assistance",
                  "Job Placement Services",
                ],
              },
              {
                id: "BPO",
                title: "BPO/KPO Services",
                description: "Offer outsourced business solutions:",
                items: [
                  "Data Processing & Analytics",
                  "Customer Support Services",
                  "Recruitment & HR Outsourcing",
                  "Back-Office Operations",
                ],
              },
              {
                id: "IA",
                title: "Industrial Automation",
                description: "Specialized training programs in:",
                items: [
                  "Robotics & Automation",
                  "PLC & SCADA Systems",
                  "IoT & Industrial IoT",
                  "Industry 4.0 Technologies",
                ],
              },
            ].map((item, index) => (
              <ScrollReveal
                key={index}
                animation="slideRight"
                duration={1000}
                easing="spring"
                delay={100 + index * 150}
                index={index}
                stagger={150}
              >
                <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                  <div className="h-16 w-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.id}
                  </div>
                  <h3 className="text-2xl font-bold text-red-600 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <ul className="space-y-2 text-gray-700">
                    {item.items.map((listItem, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div> */}
      {/* </div> */}
      {/* </section> */} */
      <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center text-red-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Programs Offered
            </h2>
            <p className="text-lg  text-black max-w-3xl mx-auto">
              Careertronic Skill & Technology Centres deliver high-demand
              programs aligned with emerging technologies and industry
              requirements.
            </p>
          </div>

          {/* Program Cards Container */}
          <div
            className="bg-gradient-to-br
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000] rounded-2xl p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Artificial Intelligence & Machine Learning",
                "Data Science & Data Analytics",
                "Full Stack Development",
                "Cloud Computing & DevOps",
                "Cyber Security & Ethical Hacking",
                "Industrial Automation & Industry 4.0",
                "Emerging Technologies Programs",
                "Web3 & Blockchain",
                "Financial Intelligence",
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-white text-black border rounded-xl px-5 py-4 hover:shadow-md transition"
                >
                  <p className="font-medium">{program}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer line */}
          <p className="mt-10 text-center text-lg max-w-4xl mx-auto text-red-700">
            All programs are designed with a strong focus on practical exposure,
            career outcomes, and industry readiness.
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto my-12 relative">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#7F1D1D] to-transparent"></div>
        <div className="absolute inset-0 blur-xl bg-[#7F1D1D]/30"></div>
      </div>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
              Research-Driven Learning Approach
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Careertronic Skill & Technology Centres function under a
              structured research and academic framework that ensures long-term
              academic and market relevance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• Continuous curriculum upgradation</li>
              <li>• Alignment with real-world industry use cases</li>
              <li>• Strong academic credibility</li>
              <li>• Long-term relevance beyond short-term trends</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-lg text-gray-700 max-w-4xl mx-auto">
          This approach enables franchise partners to attract serious learners
          and command premium course pricing.
        </p>
      </section>
      <div className="max-w-6xl mx-auto my-12 relative">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#7F1D1D] to-transparent"></div>
        <div className="absolute inset-0 blur-xl bg-[#7F1D1D]/30"></div>
      </div>
      {/* End-to-End Franchise Support */}
      <section
        className="py-20 px-6 bg-gradient-to-b
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              End-to-End Franchise Support
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Careertronic provides comprehensive support across every stage of
              the franchise lifecycle — from setup to growth and long-term
              operations.
            </p>
          </div>

          {/* Support Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pre-Launch Support */}
            <div className="border border-gray-200 rounded-2xl p-8  bg-gray-900">
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                Pre-Launch Support
              </h3>
              <ul className="space-y-2 text-lg text-white">
                <li>• Centre location and readiness guidance</li>
                <li>• Infrastructure and lab setup specifications</li>
                <li>• Faculty onboarding assistance</li>
                <li>• Pre-launch marketing support</li>
              </ul>
            </div>

            {/* Operational Support */}
            <div className="bg-gray-900 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                Operational Support
              </h3>
              <ul className="space-y-2 text-lg text-white">
                <li>• Centralized ERP and LMS access</li>
                <li>• Academic delivery frameworks</li>
                <li>• Standard Operating Procedures (SOPs)</li>
                <li>• Ongoing curriculum and content support</li>
              </ul>
            </div>

            {/* Marketing & Growth Support */}
            <div className="bg-gray-900 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                Marketing & Growth Support
              </h3>
              <ul className="space-y-2 text-lg text-white">
                <li>• Central branding support</li>
                <li>• Digital marketing frameworks</li>
                <li>• Lead generation guidance</li>
                <li>• Campaign creatives and communication templates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Technology-Powered Operations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
              Technology-Powered Operations
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Each Careertronic Skill & Technology Centre is enabled through an
              integrated ERP, LMS, and Franchise Command Centre to ensure
              operational efficiency, academic consistency, and centralized
              governance.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Capabilities */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <ul className="space-y-3 text-lg text-black">
                <li>• Student lifecycle management</li>
                <li>• Admissions and fee tracking</li>
                <li>• Academic delivery and assessments</li>
                <li>• Central reporting and analytics</li>
                <li>• Operational transparency and governance</li>
              </ul>
            </div>

            {/* Right: System Highlight */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                Integrated Digital Backbone
              </h3>
              <p className="text-lg text-black leading-relaxed">
                The centralized ERP, LMS, and Command Centre provide real-time
                visibility into academic performance, operational metrics, and
                compliance across all centres — enabling data-driven decisions
                and scalable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto my-12 relative">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#7F1D1D] to-transparent"></div>
        <div className="absolute inset-0 blur-xl bg-[#7F1D1D]/30"></div>
      </div>
      {/* Investment & Returns */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
              Investment & Returns
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Careertronic follows a transparent investment structure designed
              for long-term profitability and sustainable centre growth.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Investment Structure */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                Investment Structure
              </h3>
              <ul className="space-y-3 text-lg text-black">
                <li>• Clearly defined franchise fee</li>
                <li>• Reasonable infrastructure and setup costs</li>
                <li>• Multiple revenue streams across programs</li>
                <li>• Centralized support to optimize centre performance</li>
              </ul>
            </div>

            {/* Right: ROI Note */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                Returns & Performance
              </h3>
              <p className="text-lg text-black leading-relaxed">
                Detailed financial projections, break-even timelines, and ROI
                models are shared during the franchise evaluation process to
                ensure complete clarity and informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto my-12 relative">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#7F1D1D] to-transparent"></div>
        <div className="absolute inset-0 blur-xl bg-[#7F1D1D]/30"></div>
      </div>
      {/* Apply for Franchise Section  bg-white */}
      <div
        className="w-full  py-16 px-4 sm:px-6 lg:px-8  mx-auto bg-gradient-to-b
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000]"
      >
        <div className="text-center mb-12">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h2 className="text-3xl font-bold mb-3 text-white">
              Who can apply for a Franchise?
            </h2>
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={250}
            index={1}
            stagger={150}
          >
            <p className="max-w-sm sm:max-w-2xl mx-auto text-white">
              This opportunity is ideal for: Entrepreneurs entering the
              education sector
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:gap-6">
          {steps.map((step, index) => (
            <ScrollReveal
              key={index}
              animation="slideRight"
              duration={1000}
              easing="spring"
              delay={100 + index * 150}
              index={index}
              stagger={150}
            >
              <div className="flex flex-col items-center text-center max-w-xs">
                <Image src={step.img} width={80} height={80} alt={step.title} />
                <h3 className="text-xl font-semibold text-white mt-4">
                  {step.title}
                </h3>
                <p className="text-white mt-3">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            {/* <Button>
              Apply Now
            </Button> */}
          </ScrollReveal>
        </div>
      </div>
      {/* FAQs Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              Answers to common questions about the Careertronic franchise
              opportunity.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                  onClick={() =>
                    setActiveTab(activeTab === index ? null : index)
                  }
                >
                  <span className="text-lg font-medium text-black">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-black">
                    {activeTab === index ? "−" : "+"}
                  </span>
                </button>

                {activeTab === index && (
                  <div className="px-6 pb-6 text-lg text-black leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto my-12 relative">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#7F1D1D] to-transparent"></div>
        <div className="absolute inset-0 blur-xl bg-[#7F1D1D]/30"></div>
      </div>
      {/* Why Now Is the Right Time Section */}
      {/* <section className="bg-white text-red-600 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h2 className="text-5xl font-bold text-red-600 uppercase">
              Why Now Is the Right Time to Invest
            </h2>
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={250}
            index={1}
            stagger={150}
          >
            <p className="mt-6 text-xl text-black max-w-3xl mx-auto">
              The global demand for skilled professionals in IT, industrial
              automation, and education services is rising sharply. As
              businesses seek digital-first solutions, CGSPL's services are more
              relevant than ever. Now is the perfect time to enter this
              high-growth industry and secure long-term profitability.
            </p>
          </ScrollReveal>
        </div>
      </section> */}
      {/* Join Us Section */}
      <section
        className="bg-gradient-to-br
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000] text-white py-20 px-8 text-center"
      >
        <ScrollReveal
          animation="slideleft"
          duration={1000}
          easing="spring"
          delay={100}
          index={0}
          stagger={150}
        >
          <h2 className="text-5xl font-bold text-white uppercase">
            Join the CGSPL Family Today!
          </h2>
        </ScrollReveal>
        <ScrollReveal
          animation="slideRight"
          duration={1000}
          easing="spring"
          delay={250}
          index={1}
          stagger={150}
        >
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Start your entrepreneurial journey with CGSPL and be part of a
            global network reshaping the future of education, technology, and
            outsourcing.
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slideRight"
          duration={1000}
          easing="spring"
          delay={400}
          index={2}
          stagger={150}
        >
          <div className="mt-8 flex justify-center gap-6">
            <button>
              <Link
                className="px-8 py-4 text-lg bg-red-500 text-white rounded-xl hover:bg-red-700"
                href="/franchisecontact"
              >
                Enquire Now
              </Link>
            </button>

            <a href="/brochure/franchise.pdf" download>
              <button className="px-8 py-4 text-lg border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white">
                Download Franchise Brochure
              </button>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
