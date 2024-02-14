'use client'
import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5"; 
import { FaCode } from "react-icons/fa";
import { Rosaline } from '@/app/fonts';
import Link from 'next/link';


const navbar = () => {
    const [color, setColor] = useState('')
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 65) {
                setColor('bg-[#232526]')
            } else {
                setColor ('')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    const handleClickScroll = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }

    return (
        <div className={`w-full h-[80px] lg:h-[115] flex flex-row justify-between px-8 md:px-14 lg:px-20 xl:px-28 2xl:px-32 fixed top-0 left-0 z-10 ${color}` }>
            {/*Logo*/}
            <button className={`${Rosaline} text-white text-[25px] md:text-[30px]`}>
                    Hope
            </button>
            {/*Menu-Wrapper*/}
            <div className='flex flex-row justify-between'>
                {/*Menu-lg)*/}
                <ol className='hidden lg:flex items-center gap-[15px] xl:gap-[20px] 2xl:gap-[40px] text-white text-[16px] xl:text-[20px]'>
                    <li className='cursor-pointer' onClick={() => {handleClickScroll('about')}}>About</li>
                    <li className='cursor-pointer' onClick={() => {handleClickScroll('services')}}>Services</li>
                    {/* <li>Credentials</li> */}
                    <li className='cursor-pointer' onClick={() => {handleClickScroll('projects')}}>Projects</li>
                </ol>
                <div className='flex flex-row gap-[15px] items-center lg:pl-[20px] xl:pl-[30px] 2xl:pl-[60px]'>
                    {/*Menu-sm*/}
                    <button className='lg:hidden' onClick={handleMenuToggle}>
                        <IoMenu color='white' size={30}/>
                    </button>

                    {showMenu && (
                        <ol className='lg:hidden glass-wrapper w-[110px] absolute top-16 right-[5px] z-10 py-2 px-4 text-white hero-text text-[16px]'>
                            <li onClick={() => {handleClickScroll("about")}} className='block text-white my-1'>About</li>
                            <li onClick={() => {handleClickScroll("services")}} className='block text-white my-1'>Services</li>
                            <li onClick={() => {handleClickScroll("projects")}} className='block text-white my-1'>Projects</li>
                        </ol>
                    )}

                    {/*Code Link*/}
                    <div className='glass-code rounded-2xl lg:rounded-3xl w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center'>
                        <Link href={"https://github.com/HopeeeX/HopeX-Portfolio"}>
                            <FaCode color='white' size={18}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar