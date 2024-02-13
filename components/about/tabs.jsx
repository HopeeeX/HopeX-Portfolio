"use client";
import React, { useState } from "react";
import Image from "next/image";

const tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            {/*Tabs*/}
            <div className="tabs text-white text-[12px] xl:text-[15px]">
                <button
                    className={`py-[5px] px-[10px] xl:px-[15px] xl:py-[6px] ${
                        activeTab === 0 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(0)}
                >
                    LANGUAGES
                </button>
                <button
                    className={`py-[5px] px-[10px] xl:px-[15px] xl:py-[6px] ${
                        activeTab === 1 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(1)}
                >
                    SKILLS
                </button>
                <button
                    className={`py-[5px] px-[10px] mt-[10px] xl:px-[15px] xl:py-[6px] ${
                        activeTab === 2 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(2)}
                >
                    DESIGN & PROTOTYPING
                </button>
            </div>
            {/*Tabs Content*/}
            <div className="mt-[25px]">
                {activeTab === 0 && (
                    <div className="flex gap-4">
                        <Image
                            src={"/assets/icons/html.png"}
                            width={50}
                            height={50}
                            style={{ objectFit: "cover" }}
                            className="responsive-image"
                        />
                        <Image
                            src={"/assets/icons/dart.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                        <Image
                            src={"/assets/icons/javascript.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                        <Image
                            src={"/assets/icons/typescript.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="flex gap-2 md:gap-4 ">
                        <Image
                            src={"/assets/icons/react.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                        <Image
                            src={"/assets/icons/flutter.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                        <Image
                            src={"/assets/icons/wordpress.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                        <Image
                            src={"/assets/icons/nextjs.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                        <Image
                            src={"/assets/icons/tailwind.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                        <Image
                            src={"/assets/icons/elementor.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="flex gap-4">
                        <Image
                            src={"/assets/icons/figma.png"}
                            width={50}
                            height={50}
                            className="responsive-image"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default tabs;
