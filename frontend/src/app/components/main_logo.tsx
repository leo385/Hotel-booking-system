import Image, { ImageProps } from "next/image";
import logoImg from "@/app/assets/logo/logo.png";

interface MainLogoProps extends Omit<ImageProps, 'src' | 'alt'> {
    alt?: string,
    width?: number,
    height?: number,
}

export default function MainLogo({ alt = "StayEasy Logo", width = 350, height = 150, ...props}: MainLogoProps) {
    return (
        <>
        <a href="/">
            <Image 
            src={logoImg}
            alt={alt}
            width={width}
            height={height}
            {...props} />
        </a>
        </>
    );
}