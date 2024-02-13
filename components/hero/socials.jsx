import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";

function socials() {
    return (
        <div className='flex flex-row gap-[11px] md:gap-[20px] lg:gap-[25px] xl:gap-[30px] mt-[30px] 2xl:mt-[40px]'>
            <a className='glass-socials flex justify-center items-center'>
                <FaFacebookF />
            </a>
            <a className='glass-socials flex justify-center items-center'>
                <AiFillInstagram />
            </a>
            <a className='glass-socials flex justify-center items-center'>
                <ImLinkedin />
            </a>
            <a className='glass-socials flex justify-center items-center'>
                <TbBrandGithubFilled />
            </a>
        </div>
    )
}

export default socials