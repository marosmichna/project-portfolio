import React from 'react';

import CSS from "../images/css (1).png";
import HTML from "../images/html.png";
import JavaScript from "../images/javascript.png";
import ReactImg from "../images/react.png";
import BootstrapImg from "../images/bootstrap.png";
import GitHub from "../images/github.png";
import Tailwind from "../images/tailwind.png";
import Git from "../images/git.png";


const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">

        {/* Container */}

        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600  text-fuchsia-200">Skills</p>
                <p className="py-4">// These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
                    <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
                    <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
                    <p className="my-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
                    <img className="w-20 mx-auto" src={JavaScript} alt="JAVASCRIPT Icon" />
                    <p className="my-4">JAVASCRIPT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
                    <img className="w-20 mx-auto" src={ReactImg} alt="REACT Icon" />
                    <p className="my-4">REACT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
                    <img className="w-20 mx-auto" src={BootstrapImg} alt="BOOTSTRAP Icon" />
                    <p className="my-4">BOOTSTRAP</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
                    <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND Icon" />
                    <p className="my-4">TAILWIND</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
                    <img className="w-20 mx-auto" src={Git} alt="GIT Icon" />
                    <p className="my-4">GIT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
                    <img className="w-20 mx-auto" src={GitHub} alt="GITHUB Icon" />
                    <p className="my-4">GITHUB</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills