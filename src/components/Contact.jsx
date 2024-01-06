import React from 'react'
 import { FaInstagram,FaTwitter, FaYoutube } from "react-icons/fa";

 import { HiOutlineMail } from "react-icons/hi";
import Deeplearning from "../assets/logo_ankit1.png"

function Contact() {
  
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black via-gray-800
    to-black
     text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center">
            <form action="https://getform.io/f/063ad779-7ce6-4520-b388-5a352227cf72" method="POST" className="flex flex-col">
               <input type="text"
               name="name"
               placeholder="Enter your name"
               className="p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none" />
               <input type="text"
               name="name"
               placeholder="Enter your class"
               className="my-4 p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none" />
              <input type="text"
               name="name"
               placeholder="Enter your Parent's name"
               className=" p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none" />
               <input type="text"
               name="email" 
               placeholder="Enter your Contact no"
               className=" my-4 p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none" />
               <textarea name="message"
               rows="10"
               placeholder="Enter your message"
               className="p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none"></textarea>
               <button className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">Let's talk</button>  
            </form>
        </div>
        
      </div>
      <footer className="text-white bg-black  body-font dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto py-4 px-5 flax flex-wrap flex-col sm:flex-row">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-white dark:text-white">
<img width="48" height="48" src={Deeplearning} name="logo" alt="Deep learning" className="rounded h-12" />
<div className=" font-name ml-3 text-4xl">Deep Learning with Ankit</div>
        </div>
        <p className=" text-gray-500 sm:ml-4 sm:pl-4 sm:border-1-2 sm:border-gray-200 sm:py-2 mt-4 md:mt-2 mb-2 md:mb-0 text-center dark:text-gray-400">Copyright © 2024  </p>
      </div>
      <div className="pl-6 gap-4 flex items-center justify-center">
        <a href="https://www.instagram.com/ankit_chauhan1018?igsh=ZWI2YzEzYmMxYg=="
        target="_blank"
                rel="noreferrer"
                smooth duration={500} className=" group text-white px-3 w-fit
                py-2 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500
                to-blue-500 hover:scale-105 duration-300" ><FaInstagram  size={15} />
        </a>
        <a href="mailto:chauhan0990ankit@gmail.com"
        target="_blank"
        rel="noreferrer"
        smooth duration={500} className=" group text-white px-3 w-fit
        py-2 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500
        to-blue-500 hover:scale-105 duration-300" ><HiOutlineMail  size={15} />
        </a>
        <a href="https://twitter.com/i/flow/login" 
        target="_blank"
        rel="noreferrer"
        smooth duration={500} className=" group text-white px-3 w-fit
        py-2 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500
        to-blue-500 hover:scale-105 duration-300"><FaTwitter  size={15} />
        </a>
        <a href="https://youtube.com/@deeplearning1018?si=S0HpIUd_7ceSE07X"
        target="_blank"
        rel="noreferrer"
        smooth duration={500} className=" group text-white px-3 w-fit
        py-2 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500
        to-blue-500 hover:scale-105 duration-300"><FaYoutube  size={15} />
        </a>
      </div>
</footer>
    </div>
  )
}

export default Contact
