import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute text-md md:text-sm md:px-4 md:py-2 "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl sm:text-5xl mt-64 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <Skill name="CSS" x="-3vw" y="-14vw" />
        <Skill name="HTML" x="-27vw" y="5vw" />
        <Skill name="React" x="20vw" y="6vw" />
        <Skill name="Redux" x="2vw" y="16vw" />
        <Skill name="NodeJs" x="-20vw" y="-20vw" />
        <Skill name="Flask" x="20vw" y="-17vw" />
        <Skill name="SQL" x="32vw" y="-8vw" />
        <Skill name="Git" x="0vw" y="-21vw" />
        <Skill name="JavaScript" x="-22vw" y="18vw" />
        <Skill name="PythonCSS" x="26vw" y="18vw" />
        <Skill name="Firestore" x="1vw" y="23vw" />
        <Skill name="Next.js" x="-7vw" y="6vw" />
        <Skill name="Tailwind CSS" x="9vw" y="-4vw" />
        <Skill name="NoSQL" x="-22vw" y="-6vw" />
      </div>
    </>
  );
};

export default Skills;
