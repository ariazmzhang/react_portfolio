import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Layout from '../app/layout';
import Header from '../components/Header'

type Props = {}

function AboutMe({}: Props) {
  return (
    <div className='bg-purple-700'>
    
    {/* Header */}
    <Header />
    
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/2">
      {/* Column 1 content (if any) */}
    </div>
    <div className="w-full md:w-1/2">
      
      <div className="mb-4">
        <h3 className="font-bold">Skills</h3>
        <ul className="list-inside">
          <li><span>Languages</span><br />Java, Python, C/C++, JavaScript, HTTP/CSS, SQL, MATLAB</li>
          <li><span>Framework/Tools</span><br />React, Node.js, Express.js, MongoDB, Git</li>
          <li><span>Operating System</span><br />Linux</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold">Work Experience</h3>
        <ul className="list-inside">
          {/* Work experience list items */}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold">Education</h3>
        <ul className="list-inside">
          {/* Education list items */}
        </ul>
      </div>
    </div>
  </div>
  <div className="italic text-lg mb-4">
            Hi there, this is Aria! I'm a <strong>P</strong>rogrammer, a <strong>P</strong>odcaster, and a <strong>B</strong>ookworm.
        </div>

        <div>
            {/* social icons */}
            🪜 Find me on 
            <SocialIcon 
                url='https://www.linkedin.com/in/zhimengzhang/'
                fgColor='grey'
                bgColor='transparent'
                style={{height:30, width:30}}
            />,
            <SocialIcon 
                url='https://github.com/ariazmzhang'
                fgColor='gray'
                bgColor='transparent'
                style={{height:30, width:30}}
            />, and 
            <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                url='mailto:zmzhangg@gmail.com'
                style={{height:30, width:30}}
                bgColor='transparent'/>
        </div>
        </div>

  )
}

export default AboutMe