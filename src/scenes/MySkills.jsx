import React from "react";
import LineGradeint from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import {
    DiJavascript,
    DiReact,
    DiHtml5,
    DiCss3
} from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaGithub, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function MySkills() {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const skillsArray = [
        {
            id: 1,
            name: 'JavaScript',
            icon: <DiJavascript size={120} color="#F0DB4F" />
        },
        {
            id: 2,
            name: 'React',
            icon: <DiReact size={120} color="#61DAFB" className="hover:rotate-90 duration-500" />
        },
        {
            id: 3,
            name: 'HTML5',
            icon: <DiHtml5 size={120} color="#E34C26" />
        },
        {
            id: 4,
            name: 'CSS3',
            icon: <DiCss3 size={120} color="#66D3FA" />
        },
        {
            id: 5,
            name: 'C++',
            icon: <img src="public/assets/cpp_logo.png" alt="cpp logo" className="w-[120px] h-[120px]" />
        },
        {
            id: 6,
            name: 'GitHub',
            icon: <FaGithub size={120} color="white" />
        },
        {
            id: 7,
            name: 'MySQL',
            icon: <SiMysql size={120} color="#00758F" />
        },
        {
            id: 8,
            name: 'GIT',
            icon: <FaGitAlt size={120} color="#F1502F" />
        },
        {
            id: 9,
            name: 'Tailwind',
            icon: <RiTailwindCssFill size={120} color="#06B6D4" />
        },
        {
            id: 10,
            name: 'Bootstrap',
            icon: <FaBootstrap size={120} color="#553C7B" />
        }
    ];

    return (
        <section id="skills" className="pt-8 pb-24">
            {/* HEADER ANDIMAGE SECTION */}
            <div className="md:flex md:justify-between items-center md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-6xl mb-5">
                        MY <span className="text-red underline underline-offset-8 decoration-white">SKILLS</span>
                    </p>
                </motion.div>
                <div className="flex flex-wrap justify-center gap-10 mt-10 max-w-[1200px] mx-auto">
                    {skillsArray.map(({ id, name, icon }) => (
                        <motion.div
                            key={id}
                            className="w-full xs:w-[calc(50%-20px)] sm:w-[calc(33.333%-27px)] md:w-[calc(20%-32px)]
                                   flex flex-col items-center p-4 bg-deep-blue rounded-lg shadow-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.2 }}
                        >
                            {icon}
                            <p className="mt-4 text-xl">{name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SKILLS */}
            <div className="">  </div>
        </section>
    )
};

export default MySkills