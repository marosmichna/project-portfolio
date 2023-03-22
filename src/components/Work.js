import React from 'react';
import WorkImg from "../images/WorkImg.jpg";
import RealWork from "../images/RealWork.png";
import NameAgeApp from "../images/name-age-app.png";
import TaskApp from "../images/task-app.png";
import ProperityApp from "../images/properity-app.png"

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600  text-fuchsia-200">Work</p>
                <p className="py-4">// Check out some of my recent work</p>
            </div>

            {/* Container */}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* Grid Item */}

                <div style={{backgroundImage: `url(${NameAgeApp})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div">

                    {/* Hover Effects */}

                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider drop-shadow-lg shadow-black">
                            Name-Age Todo App
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://name-age-931l2or26-marosmichna.vercel.app">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="https://github.com/marosmichna/name-age-app">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${TaskApp})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div">

                    {/* Hover Effects */}

                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider drop-shadow-lg shadow-black">
                            Task App
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://task-immos59b0-marosmichna.vercel.app/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="https://github.com/marosmichna/task-app">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}

                <div style={{backgroundImage: `url(${ProperityApp})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div">

                    {/* Hover Effects */}

                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider drop-shadow-lg shadow-black">
                            Properity Page
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://property-k26xk4blf-marosmichna.vercel.app/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="https://github.com/marosmichna/property">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${RealWork})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div">

                    {/* Hover Effects */}

                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider drop-shadow-lg shadow-black">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}

                <div style={{backgroundImage: `url(${WorkImg})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div">

                    {/* Hover Effects */}

                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider drop-shadow-lg shadow-black">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${RealWork})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div">

                    {/* Hover Effects */}

                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider drop-shadow-lg shadow-black">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Work