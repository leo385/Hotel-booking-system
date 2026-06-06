import React, { ClassAttributes } from "react";
import Image from "next/image";
import logoImg from "@/app/assets/logo/logo.png";

interface MainLogoProps {
    className?: string,
}

export default function MainLogo({ className }: MainLogoProps) {
    const logo_width = 350;
    const logo_height = 150;

    return (
        <>
        <Image 
                className={`${className}`}
                src={logoImg}
                alt="Logo systemu rezerwacji hoteli"
                width={logo_width}
                height={logo_height}
            />
        </>
    );
}