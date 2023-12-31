import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import wavelength from "../../public/images/projects/Wavelength_Cover.png";
import slack from "../../public/images/projects/slack_clone_cover.png";
import crim_search from "../../public/images/projects/crim_search_cover.png";
import meetup from "../../public/images/projects/meetup_cover.png";
import quoted from "../../public/images/projects/Quoted_Cover.png";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative  lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-3/5 cursor-pointer overflow-hidden rounded-xl lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-2/5 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        {/* <span className="text-primary font-medium text-xl">{type}</span> */}
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-[.2rem]"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-md">
            {title}
          </h2>
        </Link>
        <p className="my-2 sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-large font-semibold sm:px-4 sm:text-base"
          >
            Live Site
          </Link>
        </div>
      </div>
    </article>
  );
};

export const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="w-1/3 flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4 md:w-full">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-3 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem] "></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-xl "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base  ">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-[.2rem]"
        >
          <h2 className="my-1 w-full text-left text-lg font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className="my-1 ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-8 md:w-6">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg  text-lg font-semibold underline underline-offset-[.2rem] md:text-base"
          >
            Live Site
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Johnny | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-[4rem] ">
          <AnimatedText
            className="mb-[4rem] lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!test-4xl"
            text={"Coding is the art of ideas brought to life."}
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Wavelength"}
                summary={`Wavelength is real-time multiplayer word association game. Built with Node.js, PostgreSQL, React, Redux, and WebSockets, Wavelength allows users to create, join, and manage games and friend relationships. It offers real-time gameplay, game history, friend requests, and various interactive features.`}
                link={`https://wavelength-2hp9.onrender.com/`}
                github={`https://github.com/johnny-2123/Wavelength`}
                type={`Feautured Project`}
                img={wavelength}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Quoted"}
                summary={`Quoted is a web application that allows users to share and discover quotes. Powered by Next.js, Tailwind CSS and Firebase, users can create, edit, delete, quotes. Users can also like quotes and follow their favorite quote creators.`}
                link={`https://quoted-phi.vercel.app/`}
                github={`https://github.com/johnny-2123/Quoted`}
                type={`Feautured Project`}
                img={quoted}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Meetup Clone"}
                summary={`Meetup Clone is a web application that allows users to join groups and attend events based on shared interests. Developed using JavaScript, React, Redux, Sequelize, HTML5, CSS3, Node.js, Express.js, and Render. `}
                link={`https://meetupclone-ndtq.onrender.com/`}
                github={`https://github.com/johnny-2123/Meetup_Clone`}
                type={`Feautured Project`}
                img={meetup}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Crim Search"}
                summary={`A paralegal-focused Chrome Extension that optimizes criminal history chart creation, reducing time by 50%. Extracts criminal case data for MD, DC, and VA, utilizing Chrome local storage and messaging system for efficient data management.`}
                link={`https://chrome.google.com/webstore/detail/crim-search/jofkolbgfgfpjdfcjhjefefbnidoamcd?hl=en&authuser=2`}
                github={`https://github.com/johnny-2123/Crim-Search-Extension`}
                type={`Feautured Project`}
                img={crim_search}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Slack Clone"}
                summary={`This is a clone of the popular communication platform Slack. It provides a comprehensive set of features to facilitate seamless communication and collaboration within workspaces.The project's backend is built on Flask and SQLAlchemy. The project's frontend is built on React and Redux. Realtime chat message functionality is handled with SocketIO.`}
                link={`https://aaslackcloneproject.onrender.com/`}
                github={`https://github.com/johnny-2123/Slack_Clone`}
                type={`Feautured Project`}
                img={slack}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
