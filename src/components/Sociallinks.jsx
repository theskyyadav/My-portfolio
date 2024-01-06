import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child : (
        <>
         LinkedIn<FaLinkedin size={30} />
         </>
         ),
      href : "www.linkedin.com/in/aakash-yadav-368b02203",
      style : 'rounded-tr-md'   
    },
    {
      id: 2,
      child : (
        <>
         GitHub<FaGithub size={30} />
         </>
         ),
      href : "https://github.com/theskyyadav",
     
    },
    {
      id: 3,
      child : (
        <>
         Gmail<HiOutlineMail size={30} />
         </>
         ),
      href : "mailto:aakashyadav0726@gmail.com",   
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id,child,href,style,download})=>(
        <li
        key={id} 
        className={`flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 w-40 h-14 px-4 bg-gray-500 ${style}`}>
          <a href={href} className=" flex justify-between items-center w-full text-white"
          download={download}
          target="_blank"
          rel="noreferrer"
          >
            {child}
          </a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Sociallinks
