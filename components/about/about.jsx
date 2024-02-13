import React from "react";
import Image from "next/image";
import { Chillax_Medium } from "@/app/fonts";
import Tabs from "./tabs"
import Link from "next/link";

function about() {
    return (
        <div className="bg-about h-auto flex flex-col justify-center items-center py-44 px-8 md:px-14 lg:px-20 xl:px-28" id='about'>
            <div className="flex flex-col justify-center items-center xl:gap-[50px] xl:flex-row">
                {/*Image*/}
                <div className="glass-image rounded-[10px] w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[350px] lg:h-[420px]">
                    <Image
                        src={"/assets/images/Profile.jpg"}
                        fill={true}
                        style={{ objectFit: "cover" }}
                        className="p-5 lg:p-7 xl:p-9"
                    />
                </div>
                {/*Content*/}
                <div className="lg:px-8 xl:px-0 xl:w-[55%]">
                    {/*Title & Description*/}
                    <div className="flex flex-col justify-center items-center xl:items-start mt-10 xl:mt-0">
                        <a href="/Medalla,Christine Hope_Resume.pdf" className="text-white text-[30px] xl:text-[40px] xl:text-start">
                            ABOUT ME
                        </a>
                        <h2 className={`${Chillax_Medium} text-white text-[15px] xl:text-[20px] text-opacity-50 text-justify mt-[20px] xl:mt-0`}>
                            A developer & designer of applications of different
                            platforms. I’m passionate in learning new
                            development , design frameworks & technology to
                            create impactful, visual-appealing & efficient
                            applications.{" "}
                        </h2>
                    </div>
                    {/*Tabs*/}
                    <div className="mt-[25px] xl:mt-[15px]">
                        <Tabs/>
                    </div>
                    {/*Contacts*/}
                    <div className="mt-[25px]">
                        <h3 className="text-white text-[16px] lg:text-[25px]">Connect with me!</h3>
                        <div className={`${Chillax_Medium} text-white text-opacity-70 mt-[15px] text-[12px] lg:text-[17px]`}>
                            <Link href="mailto: christinemedalla01@gmail.com">christinemedalla01@gmail.com</Link>
                                <span>&nbsp;|&nbsp;</span>
                            <Link  href="tel:+639261632561">+639261632561</Link>
                        </div>
                        <div className="mt-[10px]">
                            <a href={''} className={`${Chillax_Medium} text-white text-opacity-80 text-[13px] lg:text-[18px] underline`}>Download resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;
