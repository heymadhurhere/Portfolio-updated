import React, { useState, useEffect } from "react";
import LineGradeint from "../components/LineGradient";
import { motion } from "framer-motion";
import LeetcodeStats from "../components/Leetcode";
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import CircularProgress from '@mui/material/CircularProgress';

function Coding() {
    const [maxRating, setmaxRating] = useState(0);
    const [loading, setLoading] = useState(true);
    const [okCount, setOkCount] = useState(0);
    // to get the max rating
    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            try {
                const res = await fetch("https://codeforces.com/api/user.info?handles=madhur_anand");
                const data = await res.json();
                setmaxRating(data.result[0].maxRating);
            } catch (err) {
                console.error("Failed to fetch CodeForces stats", err);
            }
        };

        fetchLeetCodeStats();
    }, []);

    // to get the total solved questions

    useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch("https://codeforces.com/api/user.status?handle=madhur_anand");
        const data = await res.json();

        if (data.status === "OK") {
          const submissions = data.result;

          const okVerdicts = submissions.filter(sub => sub.verdict === "OK");
          setOkCount(okVerdicts.length);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching submissions:", err);
      }
    };

    fetchSubmissions();
  }, []);
    if (loading) return <p><CircularProgress /></p>;

    return (
        <section id="coding" className="pt-32 pb-16">
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                }}
            >
                <p className="font-playfair font-semibold text-6xl mb-5">
                    <span className="text-red">CODING</span> PROFILES
                </p>
                <LineGradeint width="mx-auto w-2/4" />
                <p className="mt-10">
                    I'm actively involved in competitive programming and have solved over <span className="text-red underline underline-offset-2 text-2xl"><a href="https://codolio.com/profile/madhur_anand">800</a></span> DSA problems across various platforms. With a current Codeforces rating of 1178, I consistently practice and improve my problem-solving skills. C++ is my preferred language, and I enjoy tackling challenging algorithms and optimizing solutions through efficient code.
                </p>
            </motion.div>
            {/* PROFILES */}
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
                <div className='max-w-4xl mx-auto mt-10'>
                    <div className='grid md:grid-cols-1 gap-10 '>
                        <a
                            href="https://leetcode.com/u/just_madhur/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 hover:border-red duration-500 border-solid border-4 border-yellow rounded-lg hover:shadow-lg hover:shadow-yellow bg-slate-700"
                        >
                            <div className="text-center"><SiLeetcode className='text-6xl text-yellow mx-auto mb-4 mt-4' /></div>
                            <h3 className='text-xl font-semibold text-center mb-2 text-white underline underline-offset-8'>LEETCODE</h3>
                            <LeetcodeStats />
                        </a>
                        <a
                            href="https://codeforces.com/profile/madhur_anand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 hover:border-red duration-500 border-solid border-4 border-blue rounded-lg hover:shadow-lg hover:shadow-blue bg-slate-700"
                        >
                            <div className="text-center"><SiCodeforces className='text-6xl text-blue mx-auto mt-4' /></div>
                            <h3 className='text-xl font-semibold text-center mb-2 text-white underline underline-offset-8'>CODEFORCES</h3>
                            <div className="flex flex-col items-center justify-center text-center w-full mb-2">
                                <p className="font-playfair text-xl">Solved {okCount} questions</p>
                                <p className="font-playfair text-xl">Max Rating : {maxRating}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Coding;