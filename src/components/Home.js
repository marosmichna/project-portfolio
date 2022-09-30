import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">

        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-fuchsia-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-fuchsia-200">Maroš Michna</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-fuchsia-400">I'm a React Developer</h2>
            <p className="text-fuchsia-400 py-4 max-w-[700px]">I'm a Junior React Developer specializing in building web pages. 
                In the future, I would like to gain more experience and keep moving forward. 
            </p>
            <div>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-fuchsia-600 hover:border-fuchsia-600">
                    View Work 
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3" />
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home
