import React from "react";
import Link from "next/link";

function collaborate() {
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(26,35,60,1), rgba(26, 35, 60, 0)), url('/assets/images/lofi.jpg')",
                backgroundPosition: "center",
            }}
            className="w-full h-auto bg-no-repeat bg-cover flex flex-col justify-center items-center py-[100px]"
        >
            <div className="flex flex-row gap-[5px] glass-collaborate px-[100px] py-[15px] rounded-xl text-white text-[15px] lg:text-[20px] xl:text-[25px]">
                <h1>Collaborate?</h1>
                <Link href="mailto: christinemedalla01@gmail.com" className="underline">
                    Email Me!
                </Link>
            </div>
        </div>
    );
}

export default collaborate;
