import React, { useEffect, useState } from "react";
import DonutChart from "./DonutChart";
import CircularProgress from '@mui/material/CircularProgress';
let easy, medium, hard

const LeetcodeStats = () => {
    const [easy, setEasy] = useState(0);
    const [medium, setMedium] = useState(0);
    const [hard, setHard] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            try {
                const res = await fetch("https://leetcode-api-faisalshohag.vercel.app/just_madhur");
                const data = await res.json();
                setEasy(data.easySolved);
                setMedium(data.mediumSolved);
                setHard(data.hardSolved);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch LeetCode stats", err);
            }
        };

        fetchLeetCodeStats();
    }, []);

    if (loading) return <p><CircularProgress /></p>;

    return (
        <div className="flex flex-col justify-center items-center min-h-[300px] font-playfair mb-4">
            <DonutChart easy={easy} medium={medium} hard={hard} />
            <p></p>
            <p className="text-xl text-white">EASY - {easy}</p>
            <p className="text-xl text-yellow">MEDIUM - {medium}</p>
            <p className="text-xl text-red">HARD - {hard}</p>
        </div>
    );
};

export default LeetcodeStats;
