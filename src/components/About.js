import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600 text-fuchsia-200">About</p>
                </div>
                <div>
                </div>
            </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:tetxt-right text-4xl font-bold">
                        <p>Hi. I'm Maroš, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm a Junior React Developer specializing in building web pages. 
                            In the future, I would like to gain more experience and keep moving forward.Now I work a creat a local system for the company.In this system I creat tables and related functionalities.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About