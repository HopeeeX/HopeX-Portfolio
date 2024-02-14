import { Chillax_Medium } from "@/app/fonts";
import React from "react";
import { MdDesktopWindows } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";

function services() {
    return (
        <div
            className="bg-services h-auto flex flex-col justify-center items-center py-44 px-8 md:px-[100px] lg:px-20 xl:px-28"
            id="services"
        >
            <div>
                {/*Title*/}
                <h1 className="text-white text-[30px] xl:text-[40px] text-center">
                    WHAT I DO
                </h1>
                {/*Content*/}
                <div className="mt-[50px] lg:grid lg:grid-cols-2 lg:gap-[60px] xl:gap-[100px]">
                    {/*Frontend*/}
                    <div className="glass-card rounded-[10px] px-[30px] py-[50px] xl:px-[50px] 2xl:w-[400px] 2xl:py-[6opx] 2xl:px-[40px]">
                        <div className="bg-[#4A6CF7] rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] flex flex-col justify-center items-center">
                            <MdDesktopWindows
                                color="white"
                                className="responsive-icon1"
                            />
                        </div>
                        <h2 className="text-white text-[16px] mt-[25px] lg:text-[24px] lg:mt-[30px]">
                            Frontend Development
                        </h2>
                        <div>
                            <h3
                                className={`${Chillax_Medium} text-white text-opacity-60 text-justify text-[13px] mt-[15px] lg:mt-[25px] lg:text-[16px]`}
                            >
                                Specialize in creating interactive components
                                of websites or applications that users directly
                                interact with. This involves translating design
                                mockups to functional code, testing
                                compatibility across browsers and devices, and
                                connecting frontend components to backend
                                systems for dynamic interactions.
                            </h3>
                        </div>
                    </div>
                    {/*UI Design*/}
                    <div className="glass-card rounded-[10px] px-[30px] py-[50px] xl:px-[50px] 2xl:w-[400px] 2xl:py-[6opx] 2xl:px-[40px] mt-[40px] lg:mt-0">
                        <div className="bg-[#4A6CF7] rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] flex flex-col justify-center items-center">
                            <FaPencilRuler
                                color="white"
                                className="responsive-icon2"
                            />
                        </div>
                        <h2 className="text-white text-[16px] mt-[25px] lg:text-[24px] lg:mt-[30px]">
                            UI Design
                        </h2>
                        <div>
                            <h3
                                className={`${Chillax_Medium} text-white text-opacity-60 text-justify text-[13px] mt-[15px] lg:mt-[25px] lg:text-[16px]`}
                            >
                                Crafting visually appealing and user-friendly
                                interfaces for websites, applications, or
                                software products. Working closely with
                                stakeholders to understand user needs and design
                                interfaces that enhance user experience (UX),
                                All while upholding brand consistency.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default services;
