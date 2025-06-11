import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function SocialMediaIcons() {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
            className="hover:opacity-50 transitio duration-500"
            href="https://www.linkedin.com/in/madhur-anand5414"
            target="_blank"
            rel="noreferrer"
            >
                <ImLinkedin size={30} />
            </a>
            <a
            className="hover:opacity-50 transitio duration-500"
            href="https://www.instagram.com/mad_hood.5414/"
            target="_blank"
            rel="noreferrer"
            >
                <FaInstagram size={30} />
            </a>
            <a
            className="hover:opacity-50 transitio duration-500"
            href="https://x.com/theMadhur_Anand"
            target="_blank"
            rel="noreferrer"
            >
                <BsTwitterX size={30} />
            </a>
        </div>
        
    )
}

export default SocialMediaIcons;