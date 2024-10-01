import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Project({ logo, name, desc, live, github_client, github_server }) {
    return (
        <div className='w-full bg-gray-800 p-6 rounded-xl'>
            <div className='flex items-center justify-between'>
                <img src={logo} className='w-9' alt="" />
                <a target='_blank' className='text-[13px] bg-lime-200 py-2 px-4 rounded-full text-gray-950 font-semibold' href={live}>Live Demo</a>
            </div>
            <p className='text-lime-100 mt-4 text-xl'>{name}</p>
            <h2 className='text-lime-100/45 mt-2 text-[13px] font-extralight tracking-wider'>{desc}</h2>
            <div className='flex items-center gap-8 mt-6'>
                <a className='text-lime-100/60 hover:underline' target='_blank' href={github_client}>
                    <span className='text-[12px] tracking-wider'>Github_Client </span>
                    <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        className='text-xs'
                    />
                </a>
                {
                    github_server && (
                        <a className='text-lime-100/60 hover:underline' target='_blank' href={github_client}>
                            <span className='text-[12px] tracking-wider'>Github_Server </span>
                            <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className='text-xs'
                            />
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default Project;