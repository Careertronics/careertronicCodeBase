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
import {
  FaIndustry,
  FaProjectDiagram,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

function page() {
  const projects = [
    {
      title: "Design & Simulation of Control Systems",
      description:
        "Master the fundamentals of designing, modeling and testing automated control systems using industry-standard simulation software. Create functional prototypes that demonstrate your ability to optimize industrial processes.",
      icon: <FaProjectDiagram className="text-white text-3xl" />,
    },
    {
      title: "Design & Implementation of Control Scheme Remote Monitoring",
      description:
        "Develop skills to implement robust remote monitoring solutions that allow real-time supervision of industrial processes from anywhere. Learn to configure secure data transmission and intuitive visualization dashboards.",
      icon: <FaWatchmanMonitoring className="text-white text-3xl" />,
    },
    {
      title: "Industrial Live Project",
      description:
        "Apply all your learnings in a capstone project addressing real industrial challenges. Work with actual automation equipment to design, implement and troubleshoot a complete control system solution.",
      icon: <FaIndustry className="text-white text-3xl" />,
    },
  ];
  const courseDesc = [
    {
      title: "Versatile Industry Applications",
      description:
        "Become qualified for roles like Automation Engineer, Control Systems Specialist, and Manufacturing Technologist with this comprehensive industrial automation certification course.",
    },
    {
      title: "Expert-Level Certification",
      description:
        "Enhance your professional profile by preparing for industry-recognized certifications and significantly improve your marketability to leading manufacturing employers.",
    },
    {
      title: "Practical Automation Mastery",
      description:
        "Experience our state-of-the-art simulation laboratory featuring 40+ industry-standard scenarios. Develop your industrial automation expertise through hands-on troubleshooting and real equipment configuration.",
    },
  ];
  const courses1 = [
    { title: "Introduction to Industrial Automation" },
    { title: "Instrumentation & Sensor Fundamentals" },
    { title: "Programmable Logic Controllers (PLC)" },
    { title: "Industrial Control Systems Overview" },
  ];

  const courses2 = [
    { title: "Motors & Variable Speed Drives" },
    { title: "Electrical Panels & Switchgear Systems" },
    { title: "Human Machine Interface (HMI)" },
    { title: "SCADA Systems for Industrial Control" },
  ];

  const courses3 = [
    { title: "PLC Programming & Automation Logic" },
    { title: "Industrial Process Control & PID Systems" },
    { title: "Factory Automation Applications" },
    { title: "Process Automation Applications" },
  ];

  const courses4 = [
    { title: "Distributed Control Systems (DCS)" },
    { title: "Industrial Networking & Data Communication" },
    { title: "Industrial Protocols (Modbus, Profibus, Ethernet/IP)" },
    { title: "Industrial Cybersecurity Fundamentals" },
  ];

  const courses5 = [
    { title: "Industrial IoT (IIoT) & Smart Manufacturing" },
    { title: "Industry 4.0 & Connected Factory Systems" },
    { title: "Automation System Integration" },
    { title: "Real-Time Monitoring & Predictive Maintenance" },
  ];

  const courses6 = [
    { title: "Automation System Design & Implementation" },
    { title: "Industrial Automation Projects & Case Studies" },
    { title: "Industrial Safety & Best Practices" },
    { title: "Capstone Project – Industrial Automation System" },
  ];
  const jobRoles = [
    {
      logo: "/coursePage/ABB.png",
      logoAlt: "ABB Logo",
      title: "ABB Group",
      company: "ABB Ltd",
    },
    {
      logo: "/coursePage/adani-power.png",
      logoAlt: "Adani Logo",
      title: "Adani Group",
      company: "Adani Enterprises Ltd",
    },
    {
      logo: "/coursePage/airbnb.svg",
      logoAlt: "Airbnb Logo",
      title: "Airbnb",
      company: "Airbnb Inc.",
    },
    {
      logo: "/coursePage/emerson.png",
      logoAlt: "Emerson Logo",
      title: "Emerson Electric",
      company: "Emerson Electric Co.",
    },
    {
      logo: "/coursePage/fuji.png",
      logoAlt: "Fuji Logo",
      title: "Fuji Electric",
      company: "Fuji Electric Co., Ltd.",
    },
    {
      logo: "/coursePage/Honeywell.png",
      logoAlt: "Honeywell Logo",
      title: "Honeywell",
      company: "Honeywell International Inc.",
    },
    {
      logo: "/coursePage/mitsubishi.png",
      logoAlt: "Mitsubishi Logo",
      title: "Mitsubishi Electric",
      company: "Mitsubishi Electric Corporation",
    },
    {
      logo: "/coursePage/quantum.png",
      logoAlt: "Quantum Logo",
      title: "Quantum",
      company: "Quantum Corporation",
    },
    {
      logo: "/coursePage/Rockwell.png",
      logoAlt: "Rockwell Logo",
      title: "Rockwell Automation",
      company: "Rockwell International",
    },
    {
      logo: "/coursePage/Schneider.png",
      logoAlt: "Schneider Logo",
      title: "Schneider Electric",
      company: "Schneider Electric SE",
    },
    {
      logo: "/coursePage/siemens.png",
      logoAlt: "Siemens Logo",
      title: "Siemens",
      company: "Siemens AG",
    },
    {
      logo: "/coursePage/TECH-MAHINDRA.png",
      logoAlt: "Tech Mahindra Logo",
      title: "Tech Mahindra",
      company: "Tech Mahindra Ltd",
    },
  ];

  const faqData = {
    General: [
      {
        id: 1,
        question: "Who can enroll in this Industrial Automation course?",
        answer:
          "This program is suitable for students, diploma holders, and professionals from Electrical, Electronics, Instrumentation, Mechanical, or Mechatronics backgrounds who want to build a career in industrial automation and control systems.",
      },
      {
        id: 2,
        question: "What does the course cover?",
        answer:
          "The curriculum covers core automation technologies including PLC programming, HMI and SCADA systems, sensors and instrumentation, VFDs and motor control, industrial networking, DCS concepts, and Industrial IoT applications.",
      },
      {
        id: 3,
        question: "What practical skills will I gain?",
        answer:
          "You will learn to design and program PLC logic, develop SCADA monitoring systems, configure industrial sensors and actuators, work with industrial communication protocols, and troubleshoot automated systems used in manufacturing and process industries.",
      },
      {
        id: 4,
        question: "How does this course help in getting a job?",
        answer:
          "The course focuses on hands-on training and real industrial use cases. By working on automation projects, programming PLCs, and designing SCADA systems, students develop practical skills required for automation engineering roles.",
      },
    ],

    Pricing: [
      {
        id: 5,
        question: "What is the course fee?",
        answer:
          "Pricing varies depending on the selected learning track and training format. We offer flexible plans and occasionally run special promotions. Please contact our team for the latest details.",
      },
      {
        id: 6,
        question: "Do you offer discounts or special offers?",
        answer:
          "Yes, we periodically provide early-bird offers, student discounts, and seasonal promotions. Contact our team to learn about the current offers.",
      },
    ],

    Features: [
      {
        id: 7,
        question: "Which automation tools and platforms will I learn?",
        answer:
          "You will work with industry-standard automation tools such as Siemens TIA Portal, Allen-Bradley RSLogix, WinCC, FactoryTalk, and SCADA platforms used in industrial control systems.",
      },
      {
        id: 8,
        question: "How will I practice automation programming?",
        answer:
          "Students practice using simulation software, PLC programming environments, and hands-on lab exercises. Guided installations and lab environments are provided to ensure practical learning.",
      },
      {
        id: 9,
        question: "What real-world applications are covered?",
        answer:
          "You will study real industrial automation scenarios such as automated production lines, packaging machines, process control systems, plant monitoring dashboards, and smart manufacturing workflows.",
      },
    ],

    Support: [
      {
        id: 10,
        question: "How can I contact support?",
        answer:
          "You can reach our support team through email, WhatsApp, or the website chat. All contact details are available on the course page.",
      },
      {
        id: 11,
        question: "Do you provide study materials and recordings?",
        answer:
          "Yes, students receive structured documentation, reference materials, lab guides, and recorded sessions to support continuous learning.",
      },
    ],
  };
  const skills = [
    "PLC Programming",
    "SCADA",
    "HMI",
    "Ladder Logic",
    "Industrial IoT",
    "Automation Studio",
    "Sensors & Actuators",
    "PID Control",
    "Siemens TIA Portal",
    "Allen-Bradley",
    "Control Systems",
    "Modbus",
    "Ethernet/IP",
    "Robotics",
    "Industrial Safety",
  ];

  return (
    <div className="h-auto w-full">
      <Navbar />

      {/* Hero Section */}
      <div
        className="min-h-[75vh] 2xl:min-h-[50vh] w-full bg-gradient-to-br
from-[#0e0e11]
via-[#3b0f2a]
to-[#000000]
 relative"
      >
        <div className="absolute h-[200px] w-[200px] top-32 left-48 rounded-full blur-[180px]" />
        <Image
          src="/coursePage/100.png"
          alt="#"
          width={600}
          height={600}
          className="absolute bottom-0 h-auto w-full"
        />
        <div className="relative top-0 left-0 w-full h-full flex xl:flex-row flex-col items-center jsutify-center">
          <div className="left h-fit xl:w-1/2 w-full xl:px-24 xl:py-20 p-4 flex flex-col gap-10 items-start">
            <ScrollReveal animation="slightRight" delay={100} easing="gentle">
              <div className="rounded-3xl border-2 sm:text-base text-xs border-white md:w-max sm:text-left text-center w-auto sm:px-10 sm:py-2 p-2 font-bold bg-black uppercase">
                ONLINE & OFFLINE Industrial Automation COURSE
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeIn" delay={300} easing="spring">
              <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold">
                Your Ultimate Handbook for Mastering{" "}
                <span className="text-red-600 capitalize">
                  Industrial Automation
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="slideUp" delay={500} easing="smooth">
              <p className="lg:text-xl sm:text-lg tracking-wide">
                Industrial Automation is a course that focuses on the
                technologies, systems, and processes used to automate industrial
                operations. It covers the integration of control systems such as
                PLCs, SCADA, sensors, and robotics to improve efficiency,
                safety, and precision in manufacturing environments. The course
                also explores the principles of automation, industrial
                communication protocols, and real-time monitoring, preparing
                learners to design and implement smart automated systems in
                modern industries.
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
                download="Industrial Automation.pdf"
                link="/brochure/Industrial Automation.pdf"
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
                      <span className="text-3xl">6</span> Months
                    </p>
                  </div>
                </div>
                <div className="h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around">
                  <div className="h-auto">
                    <p className="text-base md:text-lg">Time Commitment</p>
                  </div>
                  <div className="h-3/4 sm:border-r-4 flex items-center">
                    <p className="font-bold text-lg md:text-2xl">
                      10-12 Hrs/Week
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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#212121]/85"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center px-6 md:px-10 lg:px-16">
          <ScrollReveal animation="fadeIn" delay={200} easing="smooth">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-white leading-tight capitalize mb-16">
              How Can We Turn You Into An Industrial Automation Expert?
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
              <DevOpsSkills skills={skills} jobRoles={jobRoles} />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* DevOps Section */}
      <div className="h-auto w-full overflow-hidden">
        <CourseSection
          courseName={"Industrial Automation"}
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
              heading: "READY FOR INDUSTRIAL AUTOMATION ROLES",
              subHeading:
                "Covering all modules above makes you ready to apply for industrial automation roles",
            }}
          />
          <CourseRoadmap courses={courses3} show={false} />
          <CourseRoadmap courses={courses4} show={false} />
          <CourseRoadmap
            courses={courses5}
            show={true}
            texts={{
              heading: "YOU'RE NOW READY FOR INDUSTRIAL AUTOMATION ROLES",
              subHeading:
                "Covering all modules above makes you ready to apply for industrial automation roles",
            }}
          />

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
                download="Industrial Automation.pdf"
                link="/brochure/Industrial Automation.pdf"
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
                  Gain Real-World INDUSTRIAL AUTOMATION Experience!
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
                      className="p-6 rounded-xl bg-gradient-to-br from-[#0e0e11]
via-[#3b0f2a]
to-[#000000]

 shadow-lg text-white flex flex-col items-start h-full"
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
                  industrial automation Curriculum
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
          </div>
          {/* Fee Structure */}
          <div className="w-full bg-black">
            <FeeStructure courseName={"Industrial Automation"} />
          </div>

          {/* FAQ Section */}
          <div className="w-full h-auto bg-white">
            <FAQSection faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
