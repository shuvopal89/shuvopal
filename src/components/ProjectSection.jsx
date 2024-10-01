import React from 'react'
import Project from './Project'

const projects = [
    {
        logo: 'taskboom_logo.png',
        name: 'Taskboom',
        desc: 'A task management application',
        live: 'https://taskboom.vercel.app/',
        github_client: 'https://github.com/shuvopal89/Taskboom',
        github_server: 'https://github.com/shuvopal89/Taskboom-Server',
    },
    {
        logo: 'instagram.png',
        name: 'Instagram Clone',
        desc: 'Cloned only instagram\'s frontend around 80%',
        live: 'https://instagram-beta-orpin.vercel.app/',
        github_client: 'https://github.com/shuvopal89/Instagram-Client',
        github_server: '',
    },
]

function ProjectSection() {
    return (
        <div className='mt-24'>
            <h1 className='text-3xl font-bold text-lime-200 text-center'>Explore Projects</h1>
            <p className='text-sm text-gray-300 leading-6 tracking-wider text-center mt-3'>Explore my projects to evaluate my skills and experience.</p>
            <div className='mt-8 grid grid-cols-2 gap-2'>
                {
                    projects.map(({ logo, name, desc, live, github_client, github_server }, index) => {
                        return (
                            <Project
                                key={index}
                                logo={logo}
                                name={name}
                                desc={desc}
                                live={live}
                                github_client={github_client}
                                github_server={github_server}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectSection
