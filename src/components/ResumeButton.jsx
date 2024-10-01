import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

function ResumeButton({ title }) {
    return (
        <a href='resume.pdf' download='resume' className=' bg-gradient-to-l from-lime-200 to-lime-300 py-2 text-[13px] font-semibold text-gray-950 px-4 rounded-full'>
            <FontAwesomeIcon
                icon={faCloudArrowDown}
            />
            <span className='ml-[5px]'>{title}</span>
        </a>
    )
}

export default ResumeButton
