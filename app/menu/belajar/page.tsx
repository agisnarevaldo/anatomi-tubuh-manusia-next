import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    return (
        <main className="flex min-h-screen items-center justify-center gap-8">
            <Link href="/menu" className="absolute top-5 left-5">
                <Image src="/back.svg" alt="home" width={50} height={50} />
            </Link>
            <div className="flex gap-8">
                <Link
                    href="/menu/belajar/atas"
                    className="bg-yellow-400 py-2 px-4 outline outline-offset-2 outline-white rounded-md hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
                >
                    Atas
                </Link>
                <Link
                    href="/menu/belajar/tengah"
                    className="bg-yellow-400 py-2 px-4 outline outline-offset-2 outline-white rounded-md hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
                >
                    Tengah
                </Link>
                <Link
                    href="/menu/belajar/bawah"
                    className="bg-yellow-400 py-2 px-4 outline outline-offset-2 outline-white rounded-md hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
                >
                    Bawah
                </Link>
            </div>
        </main>
    );
}
