import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const ExperienceItem = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  href,
}) => {
  const ref = useRef(null);

  const resumeBullets = work.map((bullet, index) => (
    <li key={index} className="pl-4 font-medium list-disc">
      {bullet}
    </li>
  ));

  return (
    <li
      ref={ref}
      className="flex flex-col items-start justify-between w-4/5 mx-auto my-8 first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="w-full ml-3 text-2xl font-bold capitalize">
          {position}&nbsp;
          <a href={href} target="_blank" className="capitalize text-primary">
            @{company}
          </a>
        </h3>
        <span className="ml-3 font-medium capitalize text-dark/75">
          {address && `${time} | ${address}`}
        </span>
        <ul className="w-full mt-2 ml-8 font-medium">{resumeBullets}</ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const experienceData = [
    {
      position: "Software Developer",
      company: "The VDG Group",
      time: "Fall 2023",
      href: "https://www.interviewigniter.com/",
      work: [
        "Leveraged Vercel AI SDK to develop coding interview practice platform with live evaluation and feedback.",
        "Developed a robust user authentication and authorization system, allowing users to securely sign up and sign in via Google, GitHub, Facebook, or passwordless email.",
        "Architected a headless CMS solution by integrating content from Strapi, allowing for content editing, post scheduling, and management.",
        "Migrated high traffic blog from WordPress to NextJS, enhancing site performance and scalability using NextJS server side rendering and static generation along with React Server Components.",
      ],
    },
    {
      position: "Open Source Software Engineer",
      company: "Notesnook",
      time: "Summer 2023",
      href: "https://notesnook.com",
      work: [
        "Implemented user privacy feature for the platform’s web application developed with TypeScript and React.",
        "Demonstrated ability to navigate and understand complex codebases by contributing to a github repository featuring 18 contributors and over 7,000 stars.",
      ],
    },
    {
      position: "Software Engineering Project",
      company: "Wavelength",
      time: "Your Time",
      href: "https://wavelength-2hp9.onrender.com/",
      work: [
        "Real-time multiplayer word association game developed with React and Node / Express.",
        "Developed a real-time communication system using Websockets for simultaneous gameplay and live updates.",
        "Implemented a relational database utilizing Sequelize as the ORM and PostgreSQL as the DBMS.",
        "Integrated Redux for fetching data from the backend server and managing application state.",
        "Configured the Node.js backend infrastructure to handle HTTP requests and responses for CRUD operations.",
      ],
    },
    {
      position: "Software Engineering Project",
      company: "Quoted",
      time: "Your Time",
      href: "https://quoted-phi.vercel.app/",
      work: [
        "Next.js powered web application that allows users to share and discover quotes.",
        "Implemented a NoSQL database using Firestore to manage user and quote data.",
        "Utilized Next.js and Tailwind CSS to build a responsive UI.",
        "Leveraged Firebase cloud storage to store application media files.",
      ],
    },
    {
      position: "Software Engineering Project",
      company: "Meetup Clone",
      time: "Your Time",
      href: "https://meetupclone-ndtq.onrender.com/",
      work: [
        "Developed RESTful APIs using Node.js and Express.js.",
        "Ensured authentication and authorization for membership-related actions.",
        "Built responsive UI components using React and CSS.",
      ],
    },
    {
      position: "Software Engineering Project",
      company: "Crim Search",
      time: "Your Time",
      href: "https://chromewebstore.google.com/detail/crim-search/jofkolbgfgfpjdfcjhjefefbnidoamcd",
      work: [
        "Leveraged JavaScript, HTML, and CSS to enable users to extract data criminal case data for MD, DC, and VA.",
        "Implemented Chrome local storage to store case data extracted from multiple criminal cases.",
        "Utilized Chrome API's messaging system for seamless data transfer between content scripts and the extension's background script.",
      ],
    },
    {
      position: "Software Engineering Project",
      company: "Slack Clone",
      time: "Your Time",
      href: "https://aaslackcloneproject.onrender.com/",
      work: [
        "DRY'ed up backend code by using polymorphic inheritance for channels and direct messages.",
        "Implemented real-time chat message functionality using SocketIO, enabling instant messaging and efficient communication between users.",
        "Configured relational database schema using Flask and SQLAlchemy, leveraging the power of PostgreSQL for efficient data storage and retrieval.",
      ],
    },
    {
      position: "Paralegal",
      company: "CAIR Coalition",
      time: "Sept 2021 - August 2023",
      address: "Washington, DC",
      href: "https://www.caircoalition.org/",
      work: [
        "Supported and advised on committee overseeing the organization’s transition from Salesforce to Legal Server.",
        "Facilitated weekly team meetings with attorneys, social services coordinators, and fellow paralegals.",
        "Managed communication with clients, client advocates, expert witnesses, and other case stakeholders.",
      ],
    },
  ];

  return (
    <div className="my-[10rem]">
      <h2 className="w-full mb-32 font-bold text-center text-8xl sm:text-5xl">
        Experience
      </h2>
      <div ref={ref} className="w-[100%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4">
          {experienceData.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
