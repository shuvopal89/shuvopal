import React from 'react'
import Skill from './Skill'

function SkillSection({ section, skills }) {
    return (
        <div className='p-5 bg-gray-800 w-full rounded-xl'>
            <h3 className='text-md font-medium text-gray-400'>{section}</h3>
            <div className='mt-5 grid grid-cols-3 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1'>
                {
                    skills.map((item, index) => {
                        return (
                            <Skill
                                key={index}
                                img={item.img}
                                lan={item.lan}
                                link={item.link}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SkillSection
