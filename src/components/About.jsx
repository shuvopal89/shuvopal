import React from 'react'
import ResumeButton from './ResumeButton'

function About() {
    return (
        <div className='flex items-center gap-6 mt-24'>
            <img src="aboutme.png" alt="" />
            <div>
                <h1 className='text-3xl font-bold text-lime-200'>About Me</h1>
                <p className='text-sm text-gray-300 leading-6 tracking-wider text-justify mt-5'>I’m Shuvo Pal, a passionate junior web developer specializing in full-stack development with the MERN stack. With hands-on experience in building and optimizing web applications, I focus on creating performance-driven solutions that ensure both functionality and seamless user experience. I have completed numerous personal projects, like Taskboom, where I implemented technologies like React, Redux, Tailwind CSS, and Node.js to deliver intuitive and secure platforms. Currently pursuing a diploma in Computer Science, I’m dedicated to expanding my skills while building meaningful software solutions. Let's connect and explore how I can contribute to your next project!</p>
                <div className='mt-10'>
                    <ResumeButton title={'Download My Resume'} />
                </div>
            </div>
        </div>
    )
}

export default About
