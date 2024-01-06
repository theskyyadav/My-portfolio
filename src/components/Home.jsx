import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import Deeplearning from "../assets/deep-learning-with-ankit-high-resolution-logo (4).png"
import { Link } from "react-scroll";
import { FaYoutube } from "react-icons/fa";



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black'>
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
            <div className='flex flex-col justify-center h-full px-10'>
                <h2 className='text-4xl font-bold text-white sm:text-7xl'>
                Welcome to Deep Learning with Ankit
                </h2>
                <p className='py-4 text-gray-500 max-wd-lg'>
                Hello, I'm Ankit Chauhan. "Deep Learning with Ankit" is my attempt to teach chemistry to students in short time which took me ages to learn.
                </p>
            <div className="flex flex-row gap-4">
                <div>
                <Link to="courses" smooth duration={500} className=" group text-white px-6 w-fit
                py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                 to-blue-500 
                ">Courses
                <span className="group-hover:rotate-90 duration-300">
                  <FaCircleArrowRight size={20} className='ml-1.5'/>  </span>
                  
                </Link>
                </div>
                
                <div>
                <a
                href="https://youtube.com/@deeplearning1018?si=S0HpIUd_7ceSE07X"
                target="_blank"
                rel="noreferrer"
                smooth duration={500} className=" group text-white px-6 w-fit
                py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                to-blue-500 hover:scale-105 duration-300" 
                >
                <button>Youtube</button>
                <span >
                  <FaYoutube size={20} className='ml-1.5'/>  </span>
                </a>

                </div>
              
            </div>
        </div>
        <div>
            <img src={Deeplearning} alt="My profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  )
}

export default Home
