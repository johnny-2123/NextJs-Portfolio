import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import headshot from "public/images/profile/headshot red sweater.jpg";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const About = () => {
  return (
    <>
      <Head>
        <title>Johnny | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Coding with passion, building with purpose"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="mb-4 font-medium">
                Hello, I&apos;m Johnny Avila, a versatile software engineer who
                transforms ideas into innovative, user-centric applications. My
                expertise in JavaScript, Python, and other front-end and
                back-end technologies has allowed me to create everything from
                real-time multiplayer games to productivity-boosting Chrome
                extensions.
              </p>
              <p className="mb-4 font-medium">
                Leveraging a growth mindset and a passion for technology, I
                approach every project with a unique perspective. My diverse
                skillset showcases my adaptability and readiness to embrace new
                challenges in the digital sphere.
              </p>
              <p className="font-medium">
                I&apos;m excited to bring my perspective and technical abilities
                to your next project, pushing the boundaries of what&apos;s
                possible, and bringing your vision to life.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:col-span-8 md:order-1 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  "></div>
              <Image
                src={headshot}
                className="w-full h-auto rounded-2xl"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
