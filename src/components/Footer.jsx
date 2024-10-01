import React from 'react'

const links = [
    { img: 'github.png', link: 'https://github.com/shuvopal89' },
    { img: 'linkedin.png', link: 'https://www.linkedin.com/in/shuvopal89' },
    { img: 'twitter.png', link: 'https://x.com/shuvopal89' },
]

function Footer() {
    return (
        <div className='flex mt-20 flex-col justify-center gap-6 items-center px-4 py-5 bg-gray-800 border-t border-gray-700'>
            <div className='flex items-center gap-3'>
                {
                    links.map(({ img, link }, index) => {
                        return (
                            <a key={index} target='_blank' href={link} className='h-12 w-12 grid place-content-center bg-lime-100 rounded-full hover:scale-110 transition-all'>
                                <img src={img} className='h-6' alt="" />
                            </a>
                        )
                    })
                }
            </div>
            <div className='w-40 h-[1px] m-auto rounded-full bg-green-200'></div>
            <p className='text-sm font-light text-gray-400'>© All Rights Reserved | Shuvo Kumar Pal</p>
        </div>
    )
}

export default Footer
