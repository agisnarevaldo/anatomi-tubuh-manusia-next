"use client";

import Image from "next/image";
import Link from "next/link";
import Quiz from "@/app/component/Quiz";
import {useEffect} from "react";

export default function Bermain() {
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        }
    }, []);
    return (
        <main className="flex min-h-screen items-center justify-center gap-8">
            <Link href="/menu" className="absolute top-5 left-5">
                <Image src="/back.svg" alt="home" width={50} height={50} />
            </Link>
            <Quiz />
        </main> 
    );
}
