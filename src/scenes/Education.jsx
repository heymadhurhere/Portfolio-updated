import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
function Education() {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const education = [
        {
            heading: "B.Tech",
            schoolName: "Birla Institute of Technology, Mesra",
            marks: 85,
            passingYear: 2027,
            degree: "Bachelor of Technology",
            board: "Computer Science and Engineering",
        },
        {
            heading: "Higher Secondary",
            schoolName: "Hellens School, Sitamarhi",
            marks: 94.6,
            passingYear: 2023,
            degree: "Class 12",
            board: "CBSE",
        },
        {
            heading: "Secondary",
            schoolName: "Ramakrishna Mission Vidyapith, Purulia",
            marks: 96.4,
            passingYear: 2021,
            degree: "(Class 10)",
            board: "WBBSE",
        }
    ];


    return (
        <div id="education"
            className=" min-h-screen p-8">
            <div className="max-w-4xl mx-auto py-10">
                {/* Title */}<motion.div
                    className="md:w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                <p className="font-playfair font-semibold text-6xl mb-10">
                    <span className="text-red underline underline-offset-8 decoration-white">EDUCATION</span>
                </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    className="md:w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    {isAboveMediumScreen ? (
                        <>
                            <div className="absolute left-1/2 -translate-x-1/2 h-full border-l-2 border-yellow z-0"></div> {/* Central line */}

                            {/* Container for all timeline items, allowing them to stack vertically */}
                            <div className="w-full"> {/* This div ensures items have space to position */}
                                {education.map((item, index) => (
                                    <div key={index}
                                        className={`relative mb-10 w-1/2 flex items-center ${index % 2 === 0 ? 'pr-8 justify-end' : 'pl-8 ml-auto'
                                            }`}> {/* Alternating classes */}

                                        

                                        {/* Content box for each education item */}
                                        <div className={`bg-gray-900 p-6 rounded-lg shadow-lg w-full ${index % 2 ===0 ? 
                                            'border-r-8 border-yellow' : 'border-l-8 border-yellow'
                                        }`}>
                                            <h4 className="text-xl text-white font-semibold">{item.heading}</h4>
                                            <h3 className="font-bold text-lg text-red mb-2">{item.schoolName}</h3>
                                            <p className="text-gray-400">
                                                Degree: {item.degree} <br />
                                                Board/Branch: {item.board} <br />
                                                Marks: {item.marks}% <br />
                                                Passing Year: {item.passingYear}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) :
                        (
                            <div className="relative border-l-2 border-gray-300">
                                {education.map((item, index) => (
                                    <div key={index} className="mb-10 ml-6">
                                        <div className="absolute -left-3 w-6 h-6 bg-red rounded-full border-4 border-white"></div>
                                        <div className="bg-gray-900   p-6 border-l-8  border-yellow rounded-lg shadow-lg ">
                                            <h4 className="text-xl text-white font-semibold">{item.heading}</h4>
                                            <h3 className="font-bold text-lg text-red mb-2">{item.schoolName}</h3>
                                            <p className="text-gray-400">
                                                Degree: {item.degree} <br />
                                                Board/Branch: {item.board} <br />
                                                Marks: {item.marks}% <br />
                                                Passing Year: {item.passingYear}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                </motion.div>
            </div>
        </div>
    );
}

export default Education;