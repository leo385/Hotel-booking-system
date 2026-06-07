'use client';

import { ChangeEvent, useState } from "react";
import MainButton from "../components/main_button";
import MainLogo from "../components/main_logo";
import backgroundImg from "../assets/uploads/luxury_hotel_booking.jpg";

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({ email: '', password: '' });
    const outputError = "text-red-500 text-sm mt-1 ml-1 w-full";

    const handleSubmit = (e: ChangeEvent) => {
        e.preventDefault();

        let newErrors = { email: '', password: '' };
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email){
            newErrors.email = 'Adres e-mail jest wymagany.';
            isValid = false;
        }
        else if(!emailRegex.test(email)) {
            newErrors.email = 'Podaj poprawny adres e-mail.';
            isValid = false;
        }

        if(!password){
            newErrors.password = 'Hasło jest wymagane.';
            isValid = false;
        }

        setErrors(newErrors);

        if(isValid){
            console.log("Wszystko jest poprawnie wypełnione, wysyłam dane do backendu: ", { email, password });
            /* Wysyłamy do backendu (tutaj) ...*/
            fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
            .then(response => response.json())
            .then(data => {
                if(data.error) {
                    alert("Błąd logowania: " + data.error);
                }
                else {
                    alert("Sukces: " + data.message);
                    // Tutaj zrobimy przekierowanie do dashboardu hotelu
                }
            })
            .catch(error => {
                console.log("Błąd połączenia z serwerem: ", error);
            });
        }

    }

    return (
        <>
        <main style={{ backgroundImage: `url(${backgroundImg.src})` }} className="min-h-screen bg-cover bg-center flex items-center justify-center p-4">
            <div className="bg-cover bg-center mx-auto my-auto flex flex-col items-center gap-x-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl outline outline-black/5">
            <MainLogo className="mb-5" width={350} height={150}/>
            <h2 className="text-black">Zaloguj się do panelu systemu rezerwacji hoteli</h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap mt-8 w-100 gap-y-2" method="post">
                <input onChange={(e) => setEmail(e.target.value)} 
                className={`w-full rounded-xl outline outline-black/9 p-2 text-black transition-colors
                ${errors.email ? 'outline-red-500 bg-red-50' : 'outline outline-black/9'}`}
                type="text" placeholder="Twój email" />
                {errors.email && <span className={`${outputError}`}>{errors.email}</span>}

                <input onChange={(e) => setPassword(e.target.value)}
                className={`w-full rounded-xl outline outline-black/9 p-2 text-black transition-colors
                ${errors.password ? 'outline-red-500 bg-red-50' : 'outline outline-black/9'}`}
                type="text" placeholder="Twoje hasło"></input>
                {errors.password && <span className={`${outputError}`}>{errors.password}</span>}

                <MainButton type="submit">
                    Zaloguj się
                </MainButton>
            </form>
            </div>
        </main>
        </>
    );
}