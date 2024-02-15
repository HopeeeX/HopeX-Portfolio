"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoFigma } from "react-icons/io5";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Chillax_Medium } from "../fonts";

const page = () => {
    const [width, setWidth] = useState(300); // Default width

    useEffect(() => {
        const updateDimensions = () => {
            if (window.innerWidth >= 1500) {
                // xl breakpoint
                setWidth(1200);
            } else if (window.innerWidth >= 1000) {
                setWidth(900);
            } else if (window.innerWidth >= 700) {
                setWidth(600);
            } else if (window.innerWidth >= 500) {
                setWidth(400);
            } else {
                setWidth(300);
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return (
        <div className="bg-projects1 flex flex-col justify-center items-center px-[15px]">
            <div className="flex flex-col">
                {/*Button*/}
                <div className="mt-[100px]">
                    <Link href="/" className="text-white text-[13px] xl:text-[15px] flex flex-row gap-[10px] items-center">
                        <FaLongArrowAltLeft color="white" size={18} />
                        Back to Home
                    </Link>
                </div>
                {/*Image*/}
                <div className="mt-[20px]">
                    <Image
                        src={"/assets/images/projects/RepairAppliance_Website.png"}
                        width={width}
                        height={300}
                        className="rounded-[10px]"
                    />
                </div>
                {/*Content*/}
                <div className="mt-[80px]">
                    {/*Title & Link*/}
                    <div className="flex flex-row justify-between items-center">
                        {/*Title*/}
                        <div>
                            <h1 className="text-white text-[15px] lg:text-[25px] xl:text-[40px]">
                                UI Designer & Frontend Developer
                            </h1>
                        </div>
                        {/*Link*/}
                        <div className="glass-code rounded-full w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center'">
                            <Link
                                href={"https://www.figma.com/file/e8GaEPtwTnR6N8lpDUyhc5/Repair-Shop-(Viewing)?type=design&mode=design&t=KCB4IGqPKckQVgAU-1"}
                                className="flex justify-center items-center"
                            >
                                <IoLogoFigma color="white" size={18} />
                            </Link>
                        </div>
                    </div>
                    {/*Line*/}
                    <hr className="line w-full mt-[30px]" />
                    {/*Description*/}
                    <div
                        className={` ${Chillax_Medium} w-[250px] md:w-[350px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] text-white text-opacity-55 text-justify text-[18px] md:text-[20px] mt-[30px]`}
                    >
                        Dealt with the design and the development of the website
                        which features a user-friendly interface and essential
                        information about appliance repair services. This
                        primary focus on providing an intuitive and efficient
                        platform for clients to book repair services. Built
                        usingWordPress.
                    </div>
                    {/* Mobile
                    <div className="mt-[30px]">
                        <h1 className="text-white text-[15px] lg:text-[25px] xl:text-[40px]">
                            MOBILE
                        </h1>
                        <div className="mt-[30px]">
                            <Image
                                src={
                                    "/assets/images/projects/FoodOrdering_MobApp (2).png"
                                }
                                width={width}
                                height={300}
                                className="rounded-[10px]"
                            />
                        </div>
                    </div> */}
                    {/*Desktop*/}
                    <div className="mt-[30px]">
                        <h1 className="text-white text-[15px] lg:text-[25px] xl:text-[40px]">
                            DESKTOP
                        </h1>
                        <div className="mt-[30px]">
                            <Image
                                src={
                                    "/assets/images/projects/RepairAppliance_Website (2).png"
                                }
                                width={width}
                                height={300}
                                className="rounded-[10px]"
                            />
                        </div>
                        <div className="mt-[50px]">
                            <Image
                                src={
                                    "/assets/images/projects/RepairAppliance_Website (3).png"
                                }
                                width={width}
                                height={300}
                                className="rounded-[10px]"
                            />
                        </div>
                    </div>
                    {/*Button*/}
                    <div className="mt-[40px] flex justify-end">
                        <Link href="/" className="text-white text-[13px] xl:text-[15px] flex flex-row gap-[10px] items-center">
                            Back to Home
                            <FaLongArrowAltRight color="white" size={18} />
                        </Link>
                    </div>
                </div>
                {/*Spacer*/}
                <div className="mt-[100px]"></div>
            </div>
        </div>
    );
};

export default page;
