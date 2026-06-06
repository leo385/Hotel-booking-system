import { Metadata } from "next"
import LoginForm from "./LoginForm"

export const metadata: Metadata = {
    title: "Logowanie",
    description: "Zaloguj się do panelu StayEasy.",
}

export default function Page() {
    return (
        <>
            <LoginForm />
        </>
    );
}