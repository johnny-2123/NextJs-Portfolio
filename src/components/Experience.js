import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  const resumeBullets = work.map((bullet, index) => {
    return (
      <li key={index} className="font-medium list-disc pl-4">
        {bullet}
      </li>
    );
  });

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-4/5 mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl w-full ml-3">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 ml-3">
          {address && `${time} | ${address}`}
        </span>
        <ul className="font-medium w-full ml-8 mt-2">{resumeBullets}</ul>
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

  return (
    <div className="my-[10rem]">
      <h2 className="font-bold text-8xl sm:text-5xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[100%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Software Engineering Project"}
            company={"Wavelength"}
            companyLink={"https://wavelength-2hp9.onrender.com/"}
            work={[
              `Real-time multiplayer word association game developed with React and Node / Express.`,
              `Developed a real-time communication system using Websockets for simultaneous gameplay and live updates.`,
              `Implemented a relational database utilizing Sequelize as the ORM and PostgreSQL as the DBMS.`,
              `Integrated Redux for fetching data from the backend server and managing application state.`,
              `Configured the Node.js backend infrastructure to handle HTTP requests and responses for CRUD operations.`,
            ]}
          />
          <Details
            position={"Software Engineering Project"}
            company={"Quoted"}
            companyLink={"https://quoted-phi.vercel.app/"}
            work={[
              `Next.js powered web application that allows users to share and discover quotes.`,
              `Implemented a NoSQL database using Firestore to manage user and quote data.`,
              `Utilized Next.js and Tailwind CSS to build a responsive UI.`,
              `Leveraged Firebase cloud storage to store application media files.`,
            ]}
          />
          <Details
            position={"Open Source Software Engineer"}
            company={"Notesnook"}
            companyLink={"https://github.com/streetwriters/notesnook"}
            work={[
              `Demonstrated ability to navigate and understand complex codebases by contributing to a repository with 18 contributors and over 7,000 stars.`,
              `Implemented user privacy features for the platform’s web application developed with TypeScript and React.`,
            ]}
          />
          <Details
            position={"Software Engineering Project"}
            company={"Meetup Clone"}
            companyLink={"https://meetupclone-ndtq.onrender.com/"}
            work={[
              `Developed RESTful APIs using Node.js and Express.js.`,
              `Ensured authentication and authorization for membership-related actions.`,
              `Built responsive UI components using React and CSS.`,
            ]}
          />
          <Details
            position={"Software Engineering Project"}
            company={"Crim Search"}
            companyLink={
              "https://chrome.google.com/webstore/detail/crim-search/jofkolbgfgfpjdfcjhjefefbnidoamcd?hl=en&authuser=2"
            }
            work={[
              `Leveraged JavaScript, HTML, and CSS to enable users to extract data criminal case data for MD, DC, and VA`,
              `Implemented Chrome local storage to store case data extracted from multiple criminal cases`,
              `Utilized Chrome's messaging system for seamless data transfer between content scripts and the extension's background script.`,
            ]}
          />
          <Details
            position={"Software Engineering Project"}
            company={"Slack Clone "}
            companyLink={"https://aaslackcloneproject.onrender.com/"}
            work={[
              `DRY'ed up backend code by using polymorphic inheritance for channels and direct messages.
`,
              `Implemented real-time chat message functionality using SocketIO, enabling instant messaging and efficient communication between users.`,
              `Configured relational database schema using Flask and SQLAlchemy, leveraging the power of PostgreSQL for efficient data storage and retrieval.`,
            ]}
          />
          <Details
            position={"Paralegal"}
            company={"CAIR Coalition"}
            companyLink={"https://www.caircoalition.org/"}
            time={"Sept 2021 - August 2023"}
            address={"Washington, DC"}
            work={[
              `Supported and advised on committee overseeing the organization’s transition from Salesforce to Legal Server.`,
              `Facilitated weekly team meetings with attorneys, social services coordinators, and fellow paralegals.`,
              `Managed communication with clients, client advocates, expert witnesses, and other case stakeholders.`,
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
