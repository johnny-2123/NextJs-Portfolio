import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import headshot from "public/images/profile/headshot red sweater.jpg"
import Skills from "@/components/skills";
import Experience from "@/components/Experience";

const About = () => {

    return (
        <>
            <Head>
                <title>Johnny | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className={`flex w-full flex-col items-center justify-center`}>
                <Layout className="pt-16">
                    <AnimatedText text={`Coding with passion, building with purpose`} className="mb-16" />
                    <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-16">
                        <div className="col-span-5 flex flex-col items-start justify-start md:order-last" >
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                            <p className="mb-4 font-medium">
                                Hello, I'm Johnny Avila, a versatile software engineer who transforms ideas into innovative, user-centric applications. My expertise in JavaScript, Python, and other front-end and back-end technologies has allowed me to create everything from real-time multiplayer games to productivity-boosting Chrome extensions.
                            </p>
                            <p className="mb-4 font-medium">
                                Leveraging my background in political science and a passion for technology, I approach every project with a unique perspective. My journey from a paralegal to a software engineer showcases my adaptability and readiness to embrace new challenges in the digital sphere.
                            </p>
                            <p className="font-medium">
                                I'm excited to bring my dynamic skill set to your next project, pushing the boundaries of what's possible, and bringing your vision to life.
                            </p>

                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 md:order-first">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark">
                            </div>
                            <Image src={headshot} className={`w-full h-auto rounded-2xl`} />
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default About;
