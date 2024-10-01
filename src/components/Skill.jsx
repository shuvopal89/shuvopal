import React from 'react'
import { Link } from 'react-router-dom'

function Skill({ img, lan, link }) {
    return (
        <Link to={link} target='_blank' className={`w-full bg-gray-700 p-3 flex items-center gap-5 rounded-lg hover:cursor-pointer hover:scale-95 z-10 duration-300 ${lan === "REST API's" && 'col-span-3'} ${lan === "Vercel" && 'col-span-2'}`}>
            <div className='h-14 w-14 bg-gray-200 rounded-lg'>
                <img src={img} alt="" className='h-14 w-14 object-cover rounded-lg' />
            </div>
            <p className='text-sm text-lime-100'>{lan}</p>
        </Link>
    )
}

export default Skill
