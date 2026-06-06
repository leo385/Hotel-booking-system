import logoImg from "@/app/assets/logo/logo.png";
import MainLogo from "../components/main_logo";

export default function Header_Template() {
    return (
        <>
            <div className="flex flex-row items-center gap-x-20">
                <div className="basis-64"><MainLogo /></div>
                <div className="basis-128 max-w-128 grow"></div>
                <div className="basis-64"></div>
            </div>
        </>
    );
}