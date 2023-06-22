import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  const resumeBullets = work.map((bullet, index) => {
    return (
      <li key={index} className="font-medium list-disc pl4">
        {bullet}
      </li>
    );
  });

  return (
    <li
      ref={ref}
      className="my-8 first:mt-o last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {address && `${time} | ${address}`}
        </span>
        <ul className="font-medium w-full">{resumeBullets}</ul>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        {" "}
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
              `Developed a real-time communication system using Websockets for simultaneous gameplay and live updates.`,
              `Implemented a relational database utilizing Sequelize as the ORM tool and PostgreSQL as the database management system.`,
              `Integrated Redux for fetching data from the backend server and managing application state.`,
              `Configured the Node.js backend to handle HTTP requests and responses for CRUD operations.`,
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
            companyLink={"https://www.caircoalition.org/"}
            work={[
              `DRY'ed up backend code by using polymorphic inheritance for channels and direct messages.
`,
              `Implemented real-time chat message functionality using SocketIO, enabling instant messaging and efficient communication between users.`,
              `Configured relational database schema using Flask and SQLAlchemy, leveraging the power of PostgreSQL for efficient data storage and retrieval.`,
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
            position={"Paralegal"}
            company={"CAIR Coalition"}
            companyLink={"https://www.caircoalition.org/"}
            time={"2021-Present"}
            address={"Washington, DC"}
            work={[
              `Support and advise on committee overseeing the organization’s transition from Salesforce to Legal Server`,
              `Facilitate weekly team meetings with attorneys, social services coordinators, and fellow paralegals`,
              `Participate in intake reviews, conduct legal research, and prepare cases for pro bono placement.`,
              `Draft filings for various forms of immigration relief to be reviewed by attorneys.`,
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
