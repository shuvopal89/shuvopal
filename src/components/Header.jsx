import React from 'react'
import { Link } from 'react-router-dom';
import ResumeButton from './ResumeButton';

function Header({ scroll }) {

    return (
        <div id="header" className={`z-20 select-none m-auto px-4 sticky top-0 border-gray-700 ${scroll ? 'bg-gray-800/50 backdrop-blur-xl border-b' : ''}`}>
            <div className='max-w-[1000px] m-auto flex items-center justify-between h-[70px]'>
                <Link to={"/"}>
                    <img src="logo.png" alt="" width={130} />
                </Link>

                <ResumeButton title={'Get Resume'} />
            </div>
        </div>
    )
}

export default Header
