"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdRemoveRedEye } from "react-icons/md";
import { Chillax_Medium } from "@/app/fonts";
import { IoLink } from "react-icons/io5";


const projects = () => {
    const [width, setWidth] = useState(250); // Default width

    useEffect(() => {
        const updateDimensions = () => {
            if (window.innerWidth >= 1000) {
                // xl breakpoint
                setWidth(370);
            } else {
                setWidth(250);
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return (
        <div
            className="bg-credentials h-auto flex flex-col justify-center items-center py-44 px-8 md:px-14 lg:px-20 xl:px-28"
            id="projects"
        >
            <div className="flex flex-col justify-center items-center">
                {/*Title*/}
                <h1 className="text-white text-[30px] xl:text-[40px] mb-[70px]">
                    PROJECTS
                </h1>
                <div className="grid-container">
                    {/*Project 1*/}
                    <div className="glass-project flex flex-col rounded-[10px]">
                        {/*Image*/}
                        <div>
                            <Image
                                src={
                                    "/assets/images/projects/FoodOrdering_MobApp.png"
                                }
                                width={width}
                                height={250}
                                className="image-project"
                            />
                        </div>
                        {/*Content*/}
                        <div className="px-[20px] xl:px-[40px] pt-[30px]">
                            <h2 className="text-white text-[16px] xl:text-[20px] w-[200px] xl:w-[280px]">
                                Food Ordering Mobile Application
                            </h2>
                            {/*Used Framework*/}
                            <div className="pt-[30px] flex flex-row gap-[20px] pb-[30px]">
                                {/*Figma*/}
                                <div className="framework-color w-[70px] h-[30px] xl:h-[40px] xl:w-[100px] rounded-[5px] flex flex-col justify-center items-center">
                                    <h3
                                        className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                    >
                                        FIGMA
                                    </h3>
                                </div>
                                {/*Link to Project1*/}
                                <div className="glass-code rounded-full w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center">
                                    <Link href={"/projects/0"}>
                                        <MdRemoveRedEye
                                            color="white"
                                            size={18}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project 2*/}
                    <div className="glass-project flex flex-col rounded-[10px] mt-[40px] lg:mt-0">
                        {/*Image*/}
                        <div>
                            <Image
                                src={
                                    "/assets/images/projects/BusMonitoring_WebApp.png"
                                }
                                width={width}
                                height={250}
                                className="image-project"
                            />
                        </div>
                        {/*Content*/}
                        <div className="px-[20px] xl:px-[40px] pt-[30px]">
                            <h2 className="text-white text-[16px] xl:text-[20px] w-[200px] xl:w-[280px]">
                                Web-based Bus Monitoring System
                            </h2>
                            {/*Used Framework*/}
                            <div className="pt-[30px] flex flex-row gap-[10px] pb-[30px]">
                                <div className="flex flex-row gap-[10px]">
                                    {/*React*/}
                                    <div className="framework-color w-[70px] h-[30px] xl:h-[40px] xl:w-[100px] rounded-[5px] flex flex-col justify-center items-center">
                                        <h3
                                            className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                        >
                                            REACT
                                        </h3>
                                    </div>
                                    {/*Tailwind*/}
                                    <div className="framework-color w-[90px] h-[30px] xl:h-[40px] xl:w-[120px] rounded-[5px] flex flex-col justify-center items-center">
                                        <h3
                                            className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                        >
                                            TAILWIND
                                        </h3>
                                    </div>
                                </div>
                                {/*Link to Project1*/}
                                <div className="glass-code rounded-full w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center">
                                    <Link href={"/projects/1"}>
                                        <MdRemoveRedEye
                                            color="white"
                                            size={18}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project 3*/}
                    <div className="glass-project flex flex-col rounded-[10px] mt-[40px] lg:mt-0">
                        {/*Image*/}
                        <div>
                            <Image
                                src={
                                    "/assets/images/projects/RepairAppliance_Website.png"
                                }
                                width={width}
                                height={250}
                                className="image-project"
                            />
                        </div>
                        {/*Content*/}
                        <div className="px-[20px] xl:px-[40px] pt-[30px]">
                            <h2 className="text-white text-[16px] xl:text-[20px] w-[200px] xl:w-[280px]">
                                Repair Appliance Website
                            </h2>
                            {/*Used Framework*/}
                            <div className="pt-[15px] flex flex-row gap-[10px] xl:gap-[15px]">
                                {/*Wordpress*/}
                                <div className="framework-color w-[100px] h-[30px] xl:h-[40px] xl:w-[120px] rounded-[5px] flex flex-col justify-center items-center">
                                    <h3
                                        className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                    >
                                        WORDPRESS
                                    </h3>
                                </div>
                                {/*Elementor*/}
                                <div className="framework-color w-[100px] h-[30px] xl:h-[40px] xl:w-[120px] rounded-[5px] flex flex-col justify-center items-center">
                                    <h3
                                        className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                    >
                                        ELEMENTOR
                                    </h3>
                                </div>
                            </div>
                            {/*Link*/}
                            <div className="pt-[15px] flex flex-row gap-[15px] xl:gap-[15px] pb-[20px] 2xl:pb-0">
                                {/*Link to Project*/}
                                <div className="glass-code rounded-full w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center">
                                    <Link href={"/projects/2"}>
                                        <MdRemoveRedEye
                                            color="white"
                                            size={18}
                                        />
                                    </Link>
                                </div>
                                {/*Link to Website*/}
                                <div className="glass-code rounded-full w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center">
                                    <Link href={"https://fixappliancesnow.com/"}>
                                        <IoLink
                                            color="white"
                                            size={18}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project 4*/}
                    <div className="glass-project flex flex-col rounded-[10px] mt-[40px] lg:mt-0">
                        {/*Image*/}
                        <div>
                            <Image
                                src={
                                    "/assets/images/projects/VisitorChecklist_MobApp.png"
                                }
                                width={width}
                                height={250}
                                className="image-project"
                            />
                        </div>
                        {/*Content*/}
                        <div className="px-[20px] xl:px-[40px] pt-[30px]">
                            <h2 className="text-white text-[16px] xl:text-[20px] w-[200px] xl:w-[280px]">
                                Visitor Checklist Mobile Application
                            </h2>
                            {/*Used Framework*/}
                            <div className="pt-[30px] flex flex-row gap-[20px] pb-[30px]">
                                {/*Flutter*/}
                                <div className="framework-color w-[70px] h-[30px] xl:h-[40px] xl:w-[100px] rounded-[5px] flex flex-col justify-center items-center">
                                    <h3
                                        className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                    >
                                        FLUTTER
                                    </h3>
                                </div>
                                {/*Link to Project1*/}
                                <div className="glass-code rounded-full w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center">
                                    <Link href={"/projects/3"}>
                                        <MdRemoveRedEye
                                            color="white"
                                            size={18}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project 5*/}
                    <div className="glass-project flex flex-col rounded-[10px] mt-[40px] lg:mt-0">
                        {/*Image*/}
                        <div>
                            <Image
                                src={
                                    "/assets/images/projects/TechDash_WebApp.png"
                                }
                                width={width}
                                height={250}
                                className="image-project"
                            />
                        </div>
                        {/*Content*/}
                        <div className="px-[20px] xl:px-[40px] pt-[20px]">
                            <h2 className="text-white text-[16px] xl:text-[20px] w-[200px] xl:w-[280px]">
                                Technician Dashboard
                            </h2>
                            {/*Used Framework*/}
                            <div className="pt-[15px] flex flex-row gap-[10px] xl:gap-[10px]">
                                {/*React*/}
                                <div className="framework-color w-[80px] h-[30px] xl:h-[40px] xl:w-[100px] rounded-[5px] flex flex-col justify-center items-center">
                                    <h3
                                        className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                    >
                                        REACT
                                    </h3>
                                </div>
                                {/*Nextjs*/}
                                <div className="framework-color w-[90px] h-[30px] xl:h-[40px] xl:w-[100px] rounded-[5px] flex flex-col justify-center items-center">
                                    <h3
                                        className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                    >
                                        NEXTJS
                                    </h3>
                                </div>
                            </div>
                            <div className="pt-[10px] flex flex-row gap-[10px] xl:gap-[10px]">
                                {/*Typescript*/}
                                <div className="framework-color w-[100px] h-[30px] xl:h-[40px] xl:w-[120px] rounded-[5px] flex flex-col justify-center items-center">
                                    <h3
                                        className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                    >
                                        TYPESCRIPT
                                    </h3>
                                </div>
                                {/*Tailwind*/}
                                <div className="framework-color w-[100px] h-[30px] xl:h-[40px] xl:w-[120px] rounded-[5px] flex flex-col justify-center items-center">
                                    <h3
                                        className={`${Chillax_Medium} text-white text-[13px] xl:text-[15px]`}
                                    >
                                        TAILWIND
                                    </h3>
                                </div>
                            </div>
                            {/*Link*/}
                            <div className="pt-[15px] flex flex-row gap-[15px] xl:gap-[15px] pb-[20px] 2xl:pb-[15px]">
                                {/*Link to Project*/}
                                <div className="glass-code rounded-full w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center">
                                    <Link href={"/projects/4"}>
                                        <MdRemoveRedEye
                                            color="white"
                                            size={18}
                                        />
                                    </Link>
                                </div>
                                {/*Link to Website*/}
                                <div className="glass-code rounded-full w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center">
                                    <Link href={"https://nexsys.fixappliancesnow.com/"}>
                                        <IoLink
                                            color="white"
                                            size={18}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projects;
