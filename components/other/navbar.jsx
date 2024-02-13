'use client'
import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5"; 
import { FaCode } from "react-icons/fa";
import { Rosaline } from '@/app/fonts';
import Link from 'next/link';


const navbar = () => {
    const [color, setColor] = useState('')


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
                    <li>About</li>
                    <li>Services</li>
                    <li>Credentials</li>
                    <li>Projects</li>
                </ol>
                <div className='flex flex-row gap-[15px] items-center lg:pl-[20px] xl:pl-[30px] 2xl:pl-[60px]'>
                    {/*Menu-sm*/}
                    <div className='lg:hidden'>
                        <IoMenu color='white' size={30}/>
                    </div>
                    {/*Code Link*/}
                    <div className='glass-code rounded-2xl lg:rounded-3xl w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center'>
                        <Link href={"https://github.com/HopeeeX"}>
                            <FaCode color='white' size={18}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar