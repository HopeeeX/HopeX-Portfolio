import { Chillax_Medium } from "@/app/fonts";
import React from "react";
import Socials from "../hero/socials"

function hero() {
    return (
        <div className="bg-hero h-screen flex flex-col justify-center px-8 md:px-14 lg:px-20 xl:px-28">
            <div className="xl:flex justify-center gap-[100px] 2xl:gap-[120px]">
                {/*Content*/}
                <div className="xl:w-[50%] 2xl:mt-[40px]">
                    {/*Name*/}
                    <div className="glass-wrapper flex flex-row items-center justify-center gap-2 rounded-[20px] w-[150px] xl:w-[180px] py-[5px] xl:py-[10px]">
                        <div className="w-[10px] h-[10px] bg-[#64C7FF] rounded-xl"></div>
                        <h2
                            className={`${Chillax_Medium} text-white text-[15px] xl:text-[17px]`}
                        >
                            Hi, I'm Hope
                        </h2>
                    </div>
                    {/*Title & Description*/}
                    <div className="flex flex-col">
                        <h1 className="text-white text-[30px] xl:text-[40px] mt-[25px]">
                            You're Frontend Developer...
                        </h1>
                        <h2
                            className= {`${Chillax_Medium} text-white text-[15px] xl:text-[20px] text-opacity-50 text-justify mt-[20px] mr-[20px] md:mr-[40px] lg:mr-[150px] xl:mr-0 2xl:w-[550px]`}
                        >
                            To develop and design visually-appealing yet efficient and innovative product.
                        </h2>
                        <hr className="line mt-[30px] xl:mt-[35px] mr-[50px] md:mr-[100px] lg:mr-[190px] xl:mr-5 2xl:w-[450px]"/>
                    </div>
                    {/*Socials*/}
                    <Socials/>
                </div>
                {/*Image*/}
                <div className="hidden glass-circle xl:flex w-96 h-96 2xl:w-[450px] 2xl:h-[450px] rounded-full my-[30px] 2xl:mr-14">
                    
                </div>
            </div>
        </div>
    );
}

export default hero;
