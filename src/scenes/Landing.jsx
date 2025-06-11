import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

function Landing({ setSelectedPage }) {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md: justify-between md:items-center md:h-full gap-16 py-10">
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreen ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                before:border-2 before:border-blue before:z-[-1]">
                        <img alt="profile" className=" hover:filter hover:saturate-200 transition duration-500 ease-out hover:scale-105 z-10 w-full
                    max-w-[400px] md:max-w-[600px] h-[400px] object-cover rounded-t-[400px]" src="/assets/profile.jpg" />
                    </div>
                ) : (
                    <div>
                        <img alt="profile" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[600px] h-[400px] object-cover rounded-t-[400px]" src="/assets/profile.jpg" />
                    </div>
                )}
            </div>
            {/* MAIN SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Madhur {" "}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                            xs:before:content-brush before:absolute before:-left-[40px]
                            before:-top-[70px] before:z-[-1]"
                        >
                            Anand
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-xl text-center md:text-start">
                        <p>Hi, I'm <span className="text-red underline underline-offset-4 font-semibold text-2xl">Madhur</span> — a web developer passionate about front-end design, competitive programming, and solving real-world problems through clean, efficient code. I work with technologies like JavaScript, React, Tailwind CSS, Git, GitHub, and MySQL, and actively practice DSA and competitive programming.</p><br />

                        I love building responsive, user-friendly websites and exploring new areas like machine learning. I'm always eager to learn, collaborate, and create meaningful tech solutions.
                    </p>
                </motion.div>
                {/* CALL TO ACTIONS */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-gradeint-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:bg-blue hover:text-white hover:scale-105 duration-500 ease-in-out"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="hover:scale-110 duration-500">
                            Contact Me
                        </div>
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-gradeint-rainblue py-0.5 pr-0.5 hover:scale-105 duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                            justify-center font-playfair px-10 ease-in-out"
                        >
                            Let's Talk
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )
}

export default Landing;