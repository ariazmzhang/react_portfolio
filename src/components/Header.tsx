import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Header() {
  return (
    <header className='sticky top-0 flex flex-col p-5 justify-center max-w-7xl 
    mx-auto  z-50 items-center bg-purple-600'>
        <div className='py-5 flex items-center'>
            <h1 className="text-xl font-medium text-white "> 
                👩🏻‍💻 ARIAZHANG&#39;s Space
            </h1>
        </div>
        <div className="text-sm flex justify-between px-3 mx-3 font-medium text-blue-300 space-x-4">
            <a href="#header" className="hover:text-blue-500">Home</a>
            <a href="https://www.xiaoyuzhoufm.com/podcast/625629c4020537ed9fbedafb" className="hover:text-blue-500">Podcast</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <Link href="../pages/AboutMe" className="hover:text-blue-500">About Me</Link>
        </div>

        
        
        
    </header>
    
  )
}

export default Header