import React from 'react'
import SkillSection from './SkillSection'

const tcSkills = [
    {
        section: 'Frontend',
        skills: [
            { img: 'js.png', lan: 'JavaScript', link: 'https://www.javascript.com/' },
            { img: 'react.png', lan: 'React', link: 'https://react.dev/' },
            { img: 'redux.png', lan: 'Redux-Toolkit', link: 'https://redux-toolkit.js.org/' },
            { img: 'next.png', lan: 'Next.js-14', link: 'https://nextjs.org/' },
            { img: 'tailwind.png', lan: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
            { img: 'bootstrap.png', lan: 'Bootstrap', link: 'https://getbootstrap.com/' },
        ]
    },
    {
        section: 'Backend',
        skills: [
            { img: 'node.png', lan: 'Node.js', link: 'https://nodejs.org/en' },
            { img: 'express.png', lan: 'Express', link: 'https://expressjs.com/' },
            { img: 'google.png', lan: 'Google Cloud', link: 'https://cloud.google.com/' },
            { img: 'rest.jpeg', lan: "REST API's", link: 'https://en.wikipedia.org/wiki/REST' },
        ]
    },
    {
        section: 'Database',
        skills: [
            { img: 'mongodb.png', lan: 'MongoDB (Mongoose)', link: 'https://www.mongodb.com/' },
            { img: 'mysql.png', lan: 'MySQL', link: 'https://www.mysql.com/' },
            { img: 'firebase.png', lan: 'Firebase', link: 'https://firebase.google.com/' },
        ]
    },
    {
        section: 'Other Tools',
        skills: [
            { img: 'git.png', lan: 'Git', link: 'https://git-scm.com/' },
            { img: 'github.png', lan: 'Github', link: 'https://github.com/' },
            { img: 'cloudinary.png', lan: 'Cloudinary', link: 'https://cloudinary.com/' },
            { img: 'figma.webp', lan: 'Figma', link: 'https://www.figma.com/' },
            { img: 'vercel.png', lan: 'Vercel', link: 'https://vercel.com/' },
        ]
    }
]

function TechnicalSkills() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-lime-200 text-center'>Technical Skills</h1>
            <p className='text-sm text-gray-300 leading-6 tracking-wider text-center mt-3'>Me These are the skills that I work with.</p>
            <div className='flex flex-col gap-5 mt-8'>
                {
                    tcSkills.map((item, index) => {
                        return (
                            <SkillSection key={index} section={item.section} skills={item.skills} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TechnicalSkills
