// use client
import Layout from './layout';
import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Header from '../components/Header'
import Projects from '../components/Projects'
import AboutMe from '@/src/pages/AboutMe'
import React, { useEffect, useState } from 'react';

export default function Home() {


  return (
    <div className="flex">
      {/* Main Content */}
      <div className='bg-purple-700 ml-20 w-full'>
          <Head>
            <title>Aria Zhang's Portfolio</title>
          </Head>
          
          {/* Header */}
          <Header />
        {/* Contact */}
        
          {/* My Projects */}
          <div id="projects" className="section my-10"></div>
          <Projects />
        
          {/* My Podcast */}
          {/* <AboutMe /> */}
        {/* My Skills */}
        {/* Experience */}
        {/* Education */}
        
        </div>
        
    </div>
    
  )
}
