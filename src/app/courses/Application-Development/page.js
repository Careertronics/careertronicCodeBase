"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Form from "@/components/course/Forms";
import Button from "@/components/course/Button";
import DevOpsSkills from "@/components/course/DevOpsSkills";
import CourseSection from "@/components/course/CourseSection";
import CourseRoadmap from "@/components/course/CourseRoadmap";
import FAQSection from "@/components/course/FAQSection";
import FeeStructure from "@/components/course/FeeStructure";
import { FaPencilAlt, FaDatabase, FaCloudUploadAlt } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

function page() {
  const faqData = {
    General: [
      {
        id: 1,
        question: "Who can enroll in this course?",
        answer:
          "Anyone interested in learning App Development can join — from beginners to professionals looking to upgrade their skills. No prior coding experience is required; we start from the fundamentals.",
      },
      {
        id: 2,
        question: "What is included in the course?",
        answer:
          "The program covers mobile and cross-platform app development, UI/UX fundamentals, frontend and backend integration, APIs, databases, authentication, cloud deployment, version control (Git), and performance optimization using industry-relevant tools and frameworks.",
      },
      {
        id: 3,
        question: "What will students gain from this course?",
        answer:
          "You will build real-world, production-ready applications and a strong portfolio. The hands-on projects, GitHub exposure, and interview preparation make you job-ready for roles like App Developer, Mobile Developer, or Full-Stack Developer.",
      },
      {
        id: 4,
        question: "What are the job opportunities in this field?",
        answer:
          "App Development is highly in demand across startups, product companies, and enterprises. Opportunities include mobile app development, cross-platform development, freelancing, remote roles, and product-based careers.",
      },
    ],

    Pricing: [
      {
        id: 5,
        question: "How much does the course cost?",
        answer:
          "Our pricing varies based on the selected learning path, duration, and additional support options. We offer flexible plans tailored to different goals. Please contact our team for the latest details.",
      },
      {
        id: 6,
        question: "Do you offer any discounts or offers?",
        answer:
          "Yes, we frequently run special offers, early-bird discounts, student benefits, and seasonal promotions. Connect with our team to know about current offers.",
      },
      {
        id: 7,
        question: "What payment methods are available?",
        answer:
          "We accept UPI, credit/debit cards, net banking, and digital wallets. EMI options may be available depending on the selected plan.",
      },
    ],

    Features: [
      {
        id: 8,
        question:
          "What tools and technologies will I learn, and how relevant are they?",
        answer:
          "You will learn modern, industry-standard technologies used in professional app development, including frontend frameworks, backend integration, databases, authentication systems, API handling, cloud deployment, and version control. These tools are widely used in real-world production environments.",
      },
      {
        id: 9,
        question: "How are these tools applied in real-world projects?",
        answer:
          "You will build complete applications, integrate APIs, manage authentication, connect databases, optimize performance, and deploy apps to production — following real industry workflows and best practices.",
      },
    ],

    Security: [
      {
        id: 10,
        question: "Will I learn about app security and authentication?",
        answer:
          "Yes, the course covers authentication systems such as JWT, secure login flows, user authorization, and best practices for protecting user data in modern applications.",
      },
      {
        id: 11,
        question: "Are secure APIs and data protection covered?",
        answer:
          "You will learn how to build and consume secure APIs, handle tokens, implement role-based access control, and protect application data using industry-standard security practices.",
      },
    ],

    Support: [
      {
        id: 12,
        question: "How can I contact support?",
        answer:
          "You can reach us via email, website chat, or WhatsApp. All contact details are available on the course page for quick assistance.",
      },
      {
        id: 13,
        question: "What are your support hours?",
        answer:
          "Our support team is available Monday to Saturday, 10:00 AM to 6:00 PM IST.",
      },
    ],
  };
  const projects = [
    {
      title: "Master UI/UX Implementation",
      description:
        "Learn to craft intuitive and responsive user interfaces using frameworks like React or Vue. Apply real-world design patterns and build seamless user experiences across devices.",
      icon: <FaPencilAlt className="text-white text-3xl" />,
    },
    {
      title: "Seamless Backend Integration",
      description:
        "Build powerful backends with Node.js or Django. Learn to create and integrate RESTful APIs, handle authentication, and manage scalable databases using real-world architectures.",
      icon: <FaDatabase className="text-white text-3xl" />,
    },
    {
      title: "Automated App Deployment",
      description:
        "Master the deployment lifecycle using platforms like Heroku, Vercel, or AWS. Implement CI/CD pipelines and ensure smooth version control and rollout of full-stack applications.",
      icon: <FaCloudUploadAlt className="text-white text-3xl" />,
    },
  ];
  const courses1 = [
    { title: "Foundations of Mobile App Development" },
    { title: "Kotlin Programming for Android" },
    { title: "Java for Android Development" },
    { title: "Android Development Environment & Architecture" },
  ];

  const courses2 = [
    { title: "Android UI Design & Layouts" },
    { title: "User Interaction & Navigation" },
    { title: "Material Design Principles" },
    { title: "State Management & App Lifecycle" },
  ];

  const courses3 = [
    { title: "Advanced Android Programming" },
    { title: "Cross-Platform Development with React Native" },
    { title: "Advanced React Native Concepts" },
    { title: "Performance Optimization for Mobile Apps" },
  ];

  const courses4 = [
    { title: "Database Management & Local Storage" },
    { title: "REST API Integration & Networking" },
    { title: "Backend & Cloud Services Integration" },
    { title: "Authentication & Security in Apps" },
  ];

  const courses5 = [
    { title: "Advanced App Features & Enhancements" },
    { title: "Testing & Debugging Mobile Applications" },
    { title: "App Deployment & Play Store Publishing" },
    { title: "CI/CD for Mobile Applications" },
  ];

  const courses6 = [
    { title: "Capstone Project – End-to-End App Development" },
    { title: "Portfolio Development & Code Review" },
    { title: "Interview Preparation & Career Guidance" },
    { title: "Industry Best Practices & Final Assessment" },
  ];
  const courseDesc = [
    {
      title: "App Development Skills",
      description:
        "Master modern mobile and cross-platform app development using industry-standard tools and frameworks. Learn UI/UX design, backend integration, APIs, databases, authentication, and deployment to build scalable, high-performance applications.",
    },
    {
      title: "Industry-Recognized Certification",
      description:
        "Earn a certification that validates your technical expertise and practical skills. Designed to align with industry standards, it strengthens your resume and enhances your credibility with recruiters and hiring managers.",
    },
    {
      title: "Real Projects & Code Labs",
      description:
        "Work on real-world applications and hands-on coding labs that simulate industry environments. Build production-ready apps, collaborate on practical use cases, and develop a portfolio that showcases your capabilities.",
    },
  ];
  const skills = [
    "Java",
    "Kotlin",
    "Swift",
    "Dart",
    "Flutter",
    "React Native",
    "Xamarin",
    "Android Studio",
    "Xcode",
    "Firebase",
    "SQLite",
    "Room DB",
    "Core Data",
    "Realm",
    "Jetpack Compose",
    "MVVM",
    "MVC",
    "MVP",
    "REST API",
    "GraphQL",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Figma",
    "Adobe XD",
    "Socket.IO",
    "Push Notifications",
    "In-App Purchases",
    "App Store",
    "Play Store",
    "CI/CD",
  ];

  return (
    <div className="h-auto w-full">
      <Navbar />

      {/* Hero Section */}
      <div
        className="min-h-[75vh] 2xl:min-h-[50vh] w-full bg-gradient-to-b
from-[#000000]
via-[#3b0f2a]
to-[#0e0e11] relative"
      >
        <div className="absolute h-[200px] w-[200px] top-32 left-48 rounded-full blur-[180px]" />
        <Image
          src="/coursePage/100.png"
          alt="#"
          width={600}
          height={600}
          className="absolute bottom-0 left-0 h-auto w-full"
        />
        <div className="relative top-0 left-0 w-full h-full flex xl:flex-row flex-col items-center justify-center">
          <div className="left h-fit xl:w-1/2 w-full xl:px-20 xl:py-16 p-4 flex flex-col gap-10 items-start">
            <ScrollReveal animation="slightRight" delay={100} easing="gentle">
              <div className="rounded-3xl border-2 sm:text-base text-xs border-white md:w-max sm:text-left text-center w-auto sm:px-10 sm:py-2 p-2 font-bold bg-black uppercase">
                ONLINE & OFFLINE mobile application development COURSE
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeIn" delay={300} easing="spring">
              <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold">
                Your Ultimate Handbook for Mastering{" "}
                <span className="text-red-600 capitalize">
                  mobile application development
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="slideUp" delay={500} easing="smooth">
              <p className="lg:text-xl sm:text-lg tracking-wide">
                Mobile Application Development is a course that focuses on
                designing, building, and deploying applications for mobile
                platforms like Android and iOS. It covers the fundamentals of
                UI/UX design, programming languages such as Java, Kotlin, or
                Swift, and frameworks like Flutter or React Native. The course
                also explores backend integration, performance optimization, and
                app store deployment, equipping learners to create responsive,
                user-friendly, and functional mobile apps.
              </p>
            </ScrollReveal>
            <ScrollReveal
              animation="scaleUp"
              delay={700}
              easing="bouncy"
              className="flex gap-4 items-start"
            >
              <Button text="Enquire Now" link={"/contact"} />
              <Button
                text="Download Brochure"
                download="App.pdf"
                link="/brochure/App.pdf"
              />
            </ScrollReveal>
          </div>
          <div className="right h-fit xl:w-1/2 w-full xl:p-20 md:px-48 p-4">
            <ScrollReveal animation="slideLeft" delay={400} easing="smooth">
              <div className="h-full w-full">
                <Form text="Free Career Counselling is just a call away!" />
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ScrollReveal
          animation="scaleUp"
          delay={200}
          easing="smooth"
          className="relative bottom-0 -translate-x-1/2 w-full z-20"
        >
          <div className="h-auto sm:w-[85%] w-[75%] rounded-lg px-5 py-3 bg-[#fff] relative bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between">
            <ScrollReveal
              animation="slideUp"
              delay={800}
              easing="spring"
              className="relative flex flex-col sm:flex-row w-full text-black gap-5"
            >
              <div className="flex flex-col sm:flex-row w-full text-black gap-5">
                <div className="h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around">
                  <div className="h-auto">
                    <p className="text-base md:text-lg">Program Duration</p>
                  </div>
                  <div className="sm:border-r-4 flex items-center">
                    <p className="font-bold text-lg md:text-2xl">
                      <span className="text-3xl">4</span> Months
                    </p>
                  </div>
                </div>
                <div className="h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around">
                  <div className="h-auto">
                    <p className="text-base md:text-lg">Time Commitment</p>
                  </div>
                  <div className="h-3/4 sm:border-r-4 flex items-center">
                    <p className="font-bold text-lg md:text-2xl">
                      12-15 Hrs/Week
                    </p>
                  </div>
                </div>
                <div className="h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around">
                  <div className="h-auto">
                    <p className="text-base md:text-lg">Placement Support</p>
                  </div>
                  <div className="h-3/4 sm:border-r-4 flex items-center">
                    <p className="font-bold text-lg md:text-2xl">
                      900+ Companies
                    </p>
                  </div>
                </div>
                <div className="h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around">
                  <div className="h-auto">
                    <p className="text-base md:text-lg">Enrollment</p>
                  </div>
                  <div className="h-3/4 flex items-center">
                    <p className="font-bold text-lg md:text-2xl">
                      Highly Selective
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>

      {/* Steps Secction */}
      <div
        className="relative w-full py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxt1eap0l/image/upload/v1773050967/101_w7kvsh.png')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#212121]/85"></div>
        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center px-6 md:px-10 lg:px-16">
          <ScrollReveal animation="fadeIn" delay={200} easing="smooth">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-white leading-tight capitalize mb-16">
              How Can We Turn You Into an Expert in App Development?
            </h1>
          </ScrollReveal>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 w-full max-w-6xl">
            {/* Step 1 */}
            <ScrollReveal animation="scaleUp" delay={600} easing="spring">
              <div className="flex flex-col items-center flex-1">
                <div className="bg-gray-700/80 backdrop-blur-md w-20 h-20 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white text-3xl lg:text-5xl font-bold">
                    1
                  </span>
                </div>
                <div className="text-white text-center font-semibold">
                  <p>In-depth</p>
                  <p>Knowledge</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Arrow */}
            <div className="hidden md:block text-gray-400 text-3xl">→</div>

            {/* Step 2 */}
            <ScrollReveal animation="scaleUp" delay={800} easing="spring">
              <div className="flex flex-col items-center flex-1">
                <div className="bg-gray-700/80 backdrop-blur-md w-20 h-20 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white text-3xl lg:text-5xl font-bold">
                    2
                  </span>
                </div>
                <div className="text-white text-center font-semibold">
                  <p>Real World</p>
                  <p>Simulations</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Arrow */}
            <div className="hidden md:block text-gray-400 text-3xl">→</div>

            {/* Step 3 */}
            <ScrollReveal animation="scaleUp" delay={1000} easing="spring">
              <div className="flex flex-col items-center flex-1">
                <div className="bg-gray-700/80 backdrop-blur-md w-20 h-20 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white text-3xl lg:text-5xl font-bold">
                    3
                  </span>
                </div>
                <div className="text-white text-center font-semibold">
                  <p>Placement</p>
                  <p>Assistance</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="h-auto w-full bg-white md:py-24 md:px-20 p-4">
        <div>
          <ScrollReveal animation="slightRight" delay={200} easing="gentle">
            <h1 className="text-2xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
              Industry Requirements
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" delay={500} easing="smooth">
            <h1 className="text-3xl md:text-6xl font-bold text-black mb-10">
              Top In-Demand Skills
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="scaleUp" delay={800} easing="spring">
            <div className="w-full border-4 border-red-600 rounded-lg">
              <DevOpsSkills skills={skills} />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* DevOps Section */}
      <div className="h-auto w-full overflow-hidden">
        <CourseSection
          courseName={"application development"}
          courseDescription={courseDesc}
        />
      </div>

      {/* Our Curriculum Section */}
      <div className="h-auto w-full bg-black py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-20 xl:px-40">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3 sm:mb-4 md:mb-6">
            Our Curriculum
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10">
            Expert-Design Course Structure
          </h1>

          <CourseRoadmap courses={courses1} show={false} />
          <CourseRoadmap
            courses={courses2}
            show={true}
            texts={{
              heading: "READY FOR APP DEVELOPMENT ROLES",
              subHeading:
                "Covering all modules above makes you ready to apply for app development roles",
            }}
          />
          <CourseRoadmap
            courses={courses3}
            show={true}
            texts={{
              heading: "YOU'RE NOW READY FOR SWE ROLES",
              subHeading:
                "Covering all modules above makes you ready to apply for app development roles",
            }}
          />
          <CourseRoadmap courses={courses4} show={true} />
          <CourseRoadmap courses={courses5} show={true} />
          <CourseRoadmap courses={courses6} show={true} />

          {/* Download Brochure Section */}
          <div className="w-full bg-white p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-start gap-3 sm:gap-4 md:gap-7">
            <ScrollReveal
              animation="scaleUp"
              duration={1300}
              delay={300}
              easing="spring"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-semibold">
                Your Guide to Everything
              </h1>
            </ScrollReveal>
            <ScrollReveal
              animation="fadeIn"
              duration={1200}
              delay={600}
              easing="gentle"
            >
              <h1 className="text-lg sm:text-xl md:text-2xl text-black">
                Download Our Brochure for a Complete Overview!
              </h1>
            </ScrollReveal>
            <ScrollReveal
              animation="slideUp"
              duration={1400}
              delay={900}
              easing="bouncy"
            >
              <Button
                text="Download Brochure"
                download="App.pdf"
                link="/brochure/App.pdf"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div>
        <div>
          {/* Career-Boosting Projects Section */}
          <div className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <ScrollReveal
                animation="slightRight"
                duration={1200}
                delay={200}
                easing="gentle"
              >
                <h3 className="text-lg font-semibold text-gray-500 uppercase">
                  GAIN REAL-WORLD APPLICATION DEVELOPMENT EXPERIENCE!
                </h3>
              </ScrollReveal>
              <ScrollReveal
                animation="fadeIn"
                duration={1300}
                delay={500}
                easing="smooth"
              >
                <h2 className="text-4xl font-bold text-black mt-2">
                  Career-Boosting Projects
                </h2>
              </ScrollReveal>
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ScrollReveal
                    key={project.title}
                    animation="scaleUp"
                    duration={1200}
                    delay={200}
                    easing="spring"
                    index={index}
                    stagger={150}
                    className="h-full" // Ensure the animation wrapper takes full height
                  >
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-gradient-to-br
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000] shadow-lg text-white flex flex-col items-start h-64"
                    >
                      <div className="mb-4">{project.icon}</div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        {project.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* DevOps & Cloud Computing Curriculum Section */}
          <div className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="container mx-auto max-w-7xl">
              <ScrollReveal
                animation="slideUp"
                duration={1200}
                delay={200}
                easing="smooth"
              >
                <h2 className="text-lg font-semibold text-gray-400 uppercase">
                  Application Development Curriculum
                </h2>
              </ScrollReveal>
              <ScrollReveal
                animation="slideUp"
                duration={1200}
                delay={200}
                easing="smooth"
              >
                <h1 className="text-4xl font-bold mb-8">
                  Your Journey With Careertronic
                </h1>
              </ScrollReveal>

              <div className="bg-black text-white p-6 md:p-12">
                <ScrollReveal
                  animation="slideRight"
                  duration={800}
                  delay={300}
                  easing="spring"
                >
                  <div className="flex items-center mb-4">
                    <ScrollReveal
                      animation="scaleUp"
                      duration={600}
                      delay={500}
                      easing="bouncy"
                    >
                      <div className="w-8 h-8 bg-gray-300 text-black font-bold flex items-center justify-center rounded mr-2">
                        1
                      </div>
                    </ScrollReveal>
                    <h2 className="text-2xl font-bold text-white">
                      Onboarding Session
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* Intro Session Card */}
                  <ScrollReveal
                    animation="slideRight"
                    duration={800}
                    delay={200}
                    easing="smooth"
                  >
                    <div className="bg-slate-950 p-6 rounded-xl text-white h-52">
                      <h3 className="text-lg font-bold">Intro Session</h3>
                      <p className="text-sm text-gray-400 mt-2">
                        Start in a customized cohort and forge meaningful
                        connections who will be your allies on this journey.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Learning Coordinator Card */}
                  <ScrollReveal
                    animation="slideLeft"
                    duration={800}
                    delay={500}
                    easing="smooth"
                  >
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden h-52">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: "url('/coursePage/co2.png')",
                        }}
                      ></div>
                      <div className="relative p-6 flex flex-col justify-end h-full bg-black bg-opacity-50">
                        <h3 className="text-lg font-bold text-white">
                          Connect with a{" "}
                          <a href="/contact">
                            {" "}
                            <span className="text-blue-400">
                              Learning Coordinator
                            </span>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Live Learning Experience */}
              <div className="bg-black text-white p-6 md:p-8 lg:p-12">
                <ScrollReveal
                  animation="slideRight"
                  duration={800}
                  delay={300}
                  easing="spring"
                >
                  <div className="flex items-center mb-6">
                    <ScrollReveal
                      animation="scaleUp"
                      duration={600}
                      delay={500}
                      easing="bouncy"
                    >
                      <div className="w-8 h-8 bg-gray-300 text-black font-bold flex items-center justify-center rounded mr-2">
                        2
                      </div>
                    </ScrollReveal>
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      Live Learning Experience
                    </h2>
                  </div>
                </ScrollReveal>

                {/* Mobile layout - single column for extra small screens */}
                <div className="grid grid-cols-1 gap-4 sm:hidden">
                  {/* Live Classroom - Featured item first on mobile */}
                  <ScrollReveal
                    animation="slideUp"
                    duration={600}
                    delay={100}
                    easing="spring"
                  >
                    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-48">
                      <div className="absolute inset-0 z-0">
                        <img
                          src="/coursePage/cou9.png"
                          alt="Live Classroom"
                          className="w-full h-full object-cover rounded opacity-40"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                        <h2 className="text-xl font-bold text-white">
                          Live Classroom
                        </h2>
                        <p className="text-sm text-white">
                          Engage with instructors and connect with your peers in
                          real-time
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Other items */}
                  <ScrollReveal
                    animation="slideUp"
                    duration={600}
                    delay={100}
                    easing="spring"
                  >
                    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
                      <div className="absolute inset-0 z-0">
                        <img
                          src="/coursePage/practice.webp"
                          alt="Practice"
                          className="w-full h-full object-cover rounded opacity-40"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-lg font-bold text-white">
                          Practice with
                        </h3>
                        <p className="text-sm text-white">
                          Assignments & Home Works
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal
                    animation="slideUp"
                    duration={600}
                    delay={100}
                    easing="spring"
                  >
                    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
                      <div className="absolute inset-0 z-0">
                        <img
                          src="/coursePage/mentors.png"
                          alt="Mentorship"
                          className="w-full h-full object-cover rounded opacity-40"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-lg font-bold text-white">1:1</h3>
                        <p className="text-sm text-white">
                          Guidance from Pro Mentors
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal
                    animation="slideUp"
                    duration={600}
                    delay={100}
                    easing="spring"
                  >
                    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
                      <div className="absolute inset-0 z-0">
                        <img
                          src="/coursePage/cloud.jpg"
                          alt="cloud"
                          className="w-full h-full object-cover rounded opacity-40"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-lg font-bold text-white">
                          Cloud Sandbox
                        </h3>
                        <p className="text-sm text-white">
                          Hands-on practice in real-world cloud environment
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal
                    animation="slideUp"
                    duration={600}
                    delay={100}
                    easing="spring"
                  >
                    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
                      <div className="absolute inset-0 z-0">
                        <img
                          src="/coursePage/ai.avif"
                          alt="AI Assistance"
                          className="w-full h-full object-cover rounded opacity-40"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-lg font-bold text-white">
                          AI-Assisted
                        </h3>
                        <p className="text-sm text-white">
                          Problem-solving support
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal
                    animation="slideUp"
                    duration={600}
                    delay={100}
                    easing="spring"
                  >
                    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
                      <div className="absolute inset-0 z-0">
                        <img
                          src="/coursePage/soln.avif"
                          alt="Situational Problems"
                          className="w-full h-full object-cover rounded opacity-40"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-lg font-bold text-white">
                          Situational
                        </h3>
                        <p className="text-sm text-white">Problem & Solution</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal
                    animation="slideUp"
                    duration={600}
                    delay={100}
                    easing="spring"
                  >
                    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
                      <div className="absolute inset-0 z-0">
                        <img
                          src="/coursePage/course3.png"
                          alt="teaching"
                          className="w-full h-full object-cover rounded opacity-40"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-lg font-bold text-white">
                          Teaching-Assistance
                        </h3>
                        <p className="text-sm text-white">
                          1:1 Teaching Assistant over chat & video call
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Tablet and small screens layout - simplified grid */}
                <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
                  {/* Live Classroom - Featured item with larger size */}
                  <div className="col-span-2 md:col-span-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-48">
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/cou9.png"
                        alt="Live Classroom"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                      <h2 className="text-xl font-bold text-white">
                        Live Classroom
                      </h2>
                      <p className="text-sm text-white">
                        Engage with instructors and connect with your peers in
                        real-time
                      </p>
                    </div>
                  </div>

                  {/* Other items */}
                  <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/practice.webp"
                        alt="Practice"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">
                        Practice with
                      </h3>
                      <p className="text-sm text-white">
                        Assignments & Home Works
                      </p>
                    </div>
                  </div>

                  <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/mentors.png"
                        alt="Mentorship"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">1:1</h3>
                      <p className="text-sm text-white">
                        Guidance from Pro Mentors
                      </p>
                    </div>
                  </div>

                  <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/cloud.jpg"
                        alt="cloud"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">
                        Cloud Sandbox
                      </h3>
                      <p className="text-sm text-white">
                        Hands-on practice in real-world cloud environment
                      </p>
                    </div>
                  </div>

                  <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/ai.avif"
                        alt="AI Assistance"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">
                        AI-Assisted
                      </h3>
                      <p className="text-sm text-white">
                        Problem-solving support
                      </p>
                    </div>
                  </div>

                  <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/soln.avif"
                        alt="Situational Problems"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">
                        Situational
                      </h3>
                      <p className="text-sm text-white">Problem & Solution</p>
                    </div>
                  </div>

                  <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/course3.png"
                        alt="teaching"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">
                        Teaching-Assistance
                      </h3>
                      <p className="text-sm text-white">
                        1:1 Teaching Assistant over chat & video call
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop layout - complex grid similar to original */}
                <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-6 lg:gap-4 lg:h-[550px]">
                  {/* Practice with Assignments */}
                  <ScrollReveal
                    animation="slightLeft"
                    duration={700}
                    delay={100}
                    easing="gentle"
                    className="row-span-2 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
                  >
                    {/* <div className="row-span-2 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"> */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/practice.webp"
                        alt="Practice"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">
                        Practice with
                      </h3>
                      <p className="text-sm text-white">
                        Assignments & Home Works
                      </p>
                    </div>
                    {/* </div> */}
                  </ScrollReveal>

                  {/* 1:1 Guidance */}
                  <ScrollReveal
                    animation="fadeIn"
                    duration={900}
                    delay={300}
                    easing="spring"
                    className="row-span-2 col-start-1 row-start-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
                  >
                    {/* <div className="row-span-2 col-start-1 row-start-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"> */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/mentors.png"
                        alt="Mentorship"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">1:1</h3>
                      <p className="text-sm text-white">
                        Guidance from Pro Mentors
                      </p>
                    </div>
                    {/* </div> */}
                  </ScrollReveal>

                  {/* Situational Problem & Solution */}
                  <ScrollReveal
                    animation="fadeIn"
                    duration={900}
                    delay={300}
                    easing="spring"
                    className="row-span-2 col-start-1 row-start-5 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/soln.avif"
                        alt="Situational Problems"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">
                        Situational
                      </h3>
                      <p className="text-sm text-white">Problem & Solution</p>
                    </div>
                  </ScrollReveal>

                  {/* Live Classroom */}
                  <ScrollReveal
                    animation="slideUp"
                    duration={900}
                    delay={300}
                    easing="spring"
                    className="col-span-2 row-span-4 col-start-2 row-start-1 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/cou9.png"
                        alt="Live Classroom"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                      <h2 className="text-2xl font-bold text-white">
                        Live Classroom
                      </h2>
                      <p className="text-sm text-white">
                        Engage with instructors and connect with your peers in
                        real-time
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Cloud Sandbox */}
                  <ScrollReveal
                    animation="fadeIn"
                    duration={900}
                    delay={300}
                    easing="spring"
                    className="col-span-2 row-span-2 col-start-2 row-start-5 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/cloud.jpg"
                        alt="cloud"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-white">
                        Cloud Sandbox
                      </h3>
                      <p className="text-sm text-white">
                        Hands-on practice in real-world cloud environment
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* AI-Assisted Problem Solving */}
                  <ScrollReveal
                    animation="slideLeft"
                    duration={900}
                    delay={300}
                    easing="spring"
                    className="row-span-3 col-start-4 row-start-1 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/ai.avif"
                        alt="AI Assistance"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                      <h3 className="text-lg font-bold text-white">
                        AI-Assisted
                      </h3>
                      <p className="text-sm text-white">
                        Problem-solving support
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Teaching Assistance */}
                  <ScrollReveal
                    animation="slideLeft"
                    duration={900}
                    delay={300}
                    easing="spring"
                    className="row-span-3 col-start-4 row-start-4 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/coursePage/course3.png"
                        alt="teaching"
                        className="w-full h-full object-cover rounded opacity-40"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                      <h3 className="text-lg font-bold text-white">
                        Teaching-Assistance
                      </h3>
                      <p className="text-sm text-white">
                        1:1 Teaching Assistant over chat & video call
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Training & Placement Support */}
              <div className="bg-black text-white p-6 md:p-12">
                <ScrollReveal
                  animation="slideRight"
                  duration={800}
                  delay={300}
                  easing="spring"
                >
                  <div className="flex items-center space-x-3">
                    <ScrollReveal
                      animation="scaleUp"
                      duration={600}
                      delay={500}
                      easing="bouncy"
                    >
                      <div className="bg-gray-700 text-white px-3 py-1 rounded-lg font-bold">
                        3
                      </div>
                    </ScrollReveal>
                    <h2 className="text-xl md:text-2xl font-bold">
                      Training & Placement Support
                    </h2>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <ScrollReveal
                    animation="fadeSlideLeft"
                    duration={800}
                    delay={100}
                    easing="spring"
                    className="md:col-span-2"
                  >
                    <div
                      className="bg-cover bg-center relative p-6 md:col-span-2 rounded-lg flex flex-col justify-center"
                      style={{
                        backgroundImage: "url('/coursePage/test.webp')",
                      }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                      <div className="relative z-10">
                        <h3 className="font-bold text-lg text-white">
                          Module-Based Mocks
                        </h3>
                        <p className="text-gray-200 text-sm">
                          Practically apply your skills through interview
                          simulations post-module.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal
                    animation="fadeSlideRight"
                    duration={800}
                    delay={100}
                    easing="spring"
                    className="md:col-span-1"
                  >
                    <div className="bg-slate-950 p-4 rounded-lg text-center">
                      <h3 className="font-bold text-lg text-white">
                        Resume Building
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Build an impactful, professional resume with expert
                        mentorship.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
                <ScrollReveal
                  animation="fadeSlideLeft"
                  duration={800}
                  delay={100}
                  easing="spring"
                  className="md:col-span-2"
                >
                  <div className="bg-red-600 text-center p-4 mt-6 rounded-lg font-semibold text-sm md:text-base">
                    GET INDUSTRY READY Get access to exclusive job openings
                    within our network.
                  </div>
                  <div className="bg-gray-900 p-6 mt-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
                    <div className="w-full md:w-1/2">
                      <h3 className="font-bold text-lg">Placement Training</h3>
                      <p className="text-gray-400 text-sm">
                        Focused training to excel in tech recruitment processes.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 text-right">
                      <h3 className="font-bold text-lg">Placement Support</h3>
                      <p className="text-gray-400 text-sm">
                        End-to-end assistance to secure your dream job.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            {/**MENTORS AND TRAINERS WITH REVIEW */}
            {/* <div className="bg-white text-black py-16 px-4 rounded-s-2xl rounded-e-2xl w-full h-auto">
              <div className="container mx-auto max-w-7xl">
                <ScrollReveal
                  animation="slideUp"
                  duration={1200}
                  delay={200}
                  easing="smooth"
                >
                  <h2 className="text-lg font-semibold text-black uppercase text-center mb-4">
                    Meet Mentors & Instructors
                  </h2>
                  <h1 className="text-4xl font-bold text-center mb-12">
                    Tap into the wisdom of Application Development Experts
                  </h1>
                </ScrollReveal> */}

            {/* Reviews Section */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-black shadow-lg rounded-lg p-6"
                    >
                      <ScrollReveal
                        animation="fadeIn"
                        duration={1200}
                        delay={200}
                        easing="smooth"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                            <span className="text-gray-400">
                              {review.initials}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">
                              {review.name}
                            </h4>
                            <div className="text-yellow-400">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400">
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-400">{review.review}</p>
                      </ScrollReveal>
                    </div>
                  ))}
                </div> */}
            {/* </div>
            </div> */}
          </div>
        </div>
        {/* Fee Structure */}
        <div className="w-full bg-black">
          <FeeStructure courseName={"Application Development"} />
        </div>

        {/* FAQ Section */}
        <div className="w-full h-auto bg-white">
          <FAQSection faqData={faqData} />
        </div>
      </div>
    </div>
  );
}

export default page;
