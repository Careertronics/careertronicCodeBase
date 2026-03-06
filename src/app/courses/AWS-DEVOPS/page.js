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
import { FaBug, FaCloud, FaSync } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

function page() {
  const faqData = {
    General: [
      {
        id: 1,
        question: "Who can enroll in this AWS course?",
        answer:
          "Anyone interested in building a career in AWS Cloud and DevOps can enroll — students, IT professionals, system administrators, or career switchers. The program is structured from fundamentals to advanced concepts.",
      },
      {
        id: 2,
        question: "What is included in the course?",
        answer:
          "The course covers Linux fundamentals, AWS core services (EC2, S3, IAM, VPC, RDS), CI/CD pipelines, Docker, Kubernetes, Terraform, monitoring tools, and infrastructure automation with hands-on labs and real-world scenarios.",
      },
      {
        id: 3,
        question: "What will students gain from this program?",
        answer:
          "Students will gain practical expertise in cloud architecture, deployment automation, containerization, and infrastructure management using AWS and modern DevOps practices.",
      },
      {
        id: 4,
        question: "How does this course help in getting a job?",
        answer:
          "The program includes real-time projects, industry use cases, resume guidance, and interview preparation aligned with AWS certification standards to help students confidently crack cloud and DevOps roles.",
      },
    ],

    Pricing: [
      {
        id: 5,
        question: "What is the course fee?",
        answer:
          "Pricing varies depending on the selected learning path and support options. We offer flexible plans and occasionally run special promotions. Please contact our team for the latest details.",
      },
      {
        id: 6,
        question: "Do you provide discounts or offers?",
        answer:
          "Yes, we periodically offer early-bird, student, and seasonal discounts. Reach out to our team to learn about current offers.",
      },
    ],

    Features: [
      {
        id: 7,
        question: "What tools and AWS services will I learn?",
        answer:
          "You will work with AWS services like EC2, S3, IAM, VPC, RDS, Lambda, and CloudFormation, along with DevOps tools such as Git, Jenkins, Docker, Kubernetes, Terraform, Prometheus, and Grafana — all widely used in enterprise environments.",
      },
      {
        id: 8,
        question: "How will I practice AWS and DevOps tools?",
        answer:
          "We guide you through setting up AWS Free Tier accounts and required open-source tools. Structured lab sessions and project environments are provided for hands-on cloud practice.",
      },
      {
        id: 9,
        question: "What real-world applications are covered?",
        answer:
          "You will deploy full-stack applications on AWS, implement CI/CD pipelines, automate infrastructure using Terraform, manage container orchestration with Kubernetes, and configure monitoring dashboards — simulating real industry workflows.",
      },
    ],

    Support: [
      {
        id: 10,
        question: "How can I contact support?",
        answer:
          "You can reach our support team via email, WhatsApp, or through the website chat. All contact details are available on the course page.",
      },
      {
        id: 11,
        question: "Do you provide study materials and recordings?",
        answer:
          "Yes, we provide structured documentation, reference materials, GitHub repositories, recorded sessions, and project resources to support your learning journey.",
      },
    ],
  };
  // const reviews = [
  //   {
  //     initials: "A",
  //     name: "Aman Sharma",
  //     review:
  //       "This course is a must for anyone preparing for system design interviews! The real-world case studies on Uber, Netflix, and WhatsApp helped me understand how large-scale applications work. The explanations on microservices and database scaling were crystal clear. Highly recommended!.",
  //     rating: 5,
  //   },
  //   {
  //     initials: "P",
  //     name: "Priya Desai",
  //     review:
  //       "Great content with detailed coverage of caching, message queues, and load balancing. The instructor explained concepts in a structured way, making them easy to grasp. I just wish there were more coding exercises to practice system design problems.",
  //     rating: 4,
  //   },
  //   {
  //     initials: "R",
  //     name: "Rahul Verma",
  //     review:
  //       "As a backend developer, this course helped me improve my architectural thinking. Learning about CAP theorem, database sharding, and security best practices gave me a deeper understanding of system scalability. Definitely worth it!.",
  //     rating: 5,
  //   },
  // ];
  const projects = [
    {
      title: "Master Production Issue Handling",
      description:
        "Learn how to detect, classify, communicate, and resolve production issues, along with providing a workaround and RCA.",
      icon: <FaBug className="text-white text-3xl" />,
    },
    {
      title: "Effortless Infrastructure Setup",
      description:
        "Set up and manage scalable infrastructure on AWS using EC2, VPC, and IAM, ensuring high availability and performance.",
      icon: <FaCloud className="text-white text-3xl" />,
    },
    {
      title: "Streamline CI/CD Process",
      description:
        "Implement a CI/CD pipeline using AWS CodePipeline and CodeBuild to automate testing and deployment of applications.",
      icon: <FaSync className="text-white text-3xl" />,
    },
  ];
  const courseDesc = [
    {
      title: "Integrated Cloud & DevOps Mastery",
      description:
        "Master AWS and DevOps together—learn to deploy, automate, and manage cloud-native applications using EC2, S3, Docker, Jenkins, and Kubernetes. Build CI/CD pipelines and adopt Infrastructure as Code with real-world tools like Terraform and CloudFormation.",
    },
    {
      title: "Real-World DevOps on AWS",
      description:
        "Work hands-on in live AWS environments while applying DevOps principles. Set up pipelines, containerize apps with Docker, orchestrate with Kubernetes, and automate workflows with Jenkins and Lambda.",
    },
    {
      title: "From Cloud Fundamentals to Automation",
      description:
        "Start with core AWS services and scale up to advanced DevOps automation. Learn to provision infrastructure, manage deployments, and monitor performance—all aligned with industry best practices and certification goals.",
    },
  ];
  const courses1 = [
    { title: "DevOps Fundamentals & Culture" },
    { title: "Linux & Scripting for DevOps" },
    { title: "Version Control with Git & GitHub" },
    { title: "Build Automation with Maven" },
  ];

  const courses2 = [
    { title: "Continuous Integration with Jenkins" },
    { title: "Artifact Management & CI Pipelines" },
    { title: "Containerization with Docker" },
    { title: "Container Orchestration with Kubernetes" },
  ];

  const courses3 = [
    { title: "Infrastructure as Code with Terraform" },
    { title: "Configuration Management with Ansible" },
    { title: "Monitoring & Logging (Prometheus, ELK)" },
    { title: "CI/CD Pipeline Optimization" },
  ];

  const courses4 = [
    { title: "AWS Core Services (EC2, S3, IAM, VPC)" },
    { title: "Deploying Applications on AWS" },
    { title: "Auto Scaling & Load Balancing" },
    { title: "Cloud Security & Best Practices" },
  ];

  const courses5 = [
    { title: "Advanced DevOps on AWS" },
    { title: "Serverless & Container Services (ECS, EKS)" },
    { title: "DevOps Automation & Cloud Optimization" },
    { title: "Capstone Project – End-to-End AWS Deployment" },
  ];
  const skills = [
    "AWS",
    "EC2",
    "S3",
    "VPC",
    "CloudFormation",
    "Lambda",
    "ECS",
    "EKS",
    "Fargate",
    "IAM",
    "Route 53",
    "CloudFront",
    "CloudWatch",
    "RDS",
    "Redshift",
    "Terraform",
    "Ansible",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "GitHub",
    "GitLab CI/CD",
    "CodePipeline",
    "CodeBuild",
    "CodeDeploy",
    "CI/CD",
    "ELB",
    "Auto Scaling",
    "CloudTrail",
    "Bash Scripting",
    "Linux",
    "Prometheus",
    "Grafana",
    "ArgoCD",
    "Nagios",
    "DataDog",
    "Splunk",
    "ELK Stack",
    "Secrets Manager",
  ];
  return (
    <div className="h-auto w-full">
      <Navbar />

      {/* Hero Section */}
      <div
        className="min-h-[75vh] 2xl:min-h-[50vh] w-full bg-gradient-to-b
from-[#000000]
via-[#3b0f2a]
to-[#0e0e11]  relative"
      >
        <div className="absolute h-[200px] w-[200px] top-32 left-48 rounded-full blur-[180px]" />
        <Image
          src="/coursePage/100.png"
          alt="#"
          width={600}
          height={600}
          className="absolute bottom-0 h-auto w-full"
        />
        <div className="relative top-0 left-0 w-full h-full flex xl:flex-row flex-col items-center justify-center">
          <div className="left h-fit xl:w-1/2 w-full xl:px-20 xl:py-16 p-4 flex flex-col gap-10 items-start">
            <ScrollReveal animation="slightRight" delay={100} easing="gentle">
              <div className="rounded-3xl border-2 sm:text-base text-xs border-white md:w-max sm:text-left text-center w-auto sm:px-10 sm:py-2 p-2 font-bold bg-black uppercase">
                ONLINE & OFFLINE Amazon Web Services & DevOps COURSE
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeIn" delay={300} easing="spring">
              <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold">
                Your Ultimate Handbook for Mastering{" "}
                <span className="text-red-600 capitalize">AWS & DevOps</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="slideUp" delay={500} easing="smooth">
              <p className="lg:text-xl sm:text-lg tracking-wide">
                This course covers the fundamentals of AWS cloud services and
                DevOps practices. It focuses on deploying and managing scalable
                applications using tools like EC2, S3, Lambda, Docker, Jenkins,
                and Kubernetes. Learners gain hands-on experience with CI/CD
                pipelines, infrastructure as code, and cloud automation. Ideal
                for those preparing for roles in cloud engineering or
                certifications like AWS Solutions Architect or DevOps Engineer.
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
                download="Cloud computing program.pdf"
                link="/brochure/Cloud computing program.pdf"
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
          <div
            className="h-auto sm:w-[85%] w-[75%] rounded-lg px-5 py-3 bg-[#fff] relative bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between
            
            "
          >
            <ScrollReveal
              animation="slideUp"
              delay={800}
              easing="spring"
              className="relative flex flex-col sm:flex-row w-full text-black gap-5"
            >
              <div className="flex flex-col sm:flex-row w-full text-black gap-5">
                <div className="h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around">
                  <div className="h-auto">
                    <p className="text-base md:text-lg">Propgram Duration</p>
                  </div>
                  <div className="sm:border-r-4 flex items-center">
                    <p className="font-bold text-lg md:text-2xl">
                      <span className="text-3xl">3.5</span> Months
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
          backgroundImage: "url('/coursePage/101.PNG')", // <-- replace with your new image path
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
              How Can We Turn You Into an Expert in Devops?
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
              Top In-Demand skills
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
          courseName={"AWS & DevOps"}
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

          <CourseRoadmap courses={courses1} show={true} />
          <CourseRoadmap
            courses={courses2}
            show={true}
            texts={{
              heading: "READY FOR AWS & DEVOPS ROLES",
              subHeading:
                "Covering all modules above makes you ready to apply for AWS & DevOps roles",
            }}
          />
          <CourseRoadmap
            courses={courses3}
            show={true}
            texts={{
              heading: "YOU'RE NOW READY FOR AWS DEVOPS ENGINEER ROLES",
              subHeading:
                "Covering all modules above makes you ready to apply for AWS & DevOps roles",
            }}
          />
          <CourseRoadmap courses={courses4} show={true} />
          <CourseRoadmap courses={courses5} show={true} />
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
              duration={1200}
              delay={500}
              easing="bouncy"
            >
              <Button
                text="Download Brochure"
                download="Cloud computing program.pdf"
                link="/brochure/Cloud computing program.pdf"
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
                  Gain Real-World AWS & DevOps Experience!
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
                  AWS & DevOps Curriculum
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
            {/* *MENTORS AND TRAINERS WITH REVIEW */}
          </div>
        </div>
        {/* Fee Structure */}
        <div className="w-full bg-black">
          <FeeStructure courseName={"AWS & DevOps"} />
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
