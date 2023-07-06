import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

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
        <h3 className="capitalize font-bold text-2xl w-full ml-4 mb-2">
          {type}
        </h3>
        <span className="capitalize font-medium ml-4  text-dark/75">
          {time} | {place}
        </span>
        <ul className="font-medium w-full ml-4">{info}</ul>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-[10rem]">
      <h2 className="font-bold text-8xl sm:text-5xl mb-32 w-full text-center">
        Education
      </h2>
      <div ref={ref} className="w-[100%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Certificate in Software Engineering"
            time="2022 - 2023"
            place="App Academy"
            // info="jono"
          />
          <Details
            type="Bachelor of Science in Political Science"
            time="2017 - 2021"
            place="Northwestern University"
            // info="jono"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
