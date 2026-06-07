"use client"

import MainLogo from "../components/main_logo";
import SearchIcon from "@/app/assets/icons/search_icon.svg";
import Image from "next/image";

function hello() {
    console.log("hello!");
}

export default function Header_Template() {
    return (
        <>
            <div className="bg-white w-full p-5">
                <div className="mx-auto w-full max-w-[1140px] flex flex-row items-center justify-between gap-x-20">
                    <div className="basis-64"><MainLogo width={150} height={150}/></div>
                    <div className="basis-128 max-w-128 grow">
                        <div className="outline-1 outline-[#ebe8e8] h-10 rounded-md flex flew-row items-center p-2 w-full">
                            <div className="pr-2"><Image src={SearchIcon} alt="Search icon" width={26} height={26}/></div>
                            <div className="w-full text-black border-none">
                                <form onSubmit={hello}>
                                    <input className="w-full outline-none bg-transparent" type="text" placeholder="Search"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="basis-64"></div>
                </div>
            </div>
        </>
    );
}