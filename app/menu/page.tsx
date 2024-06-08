import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-8">
      <Link href="/" className="absolute top-5 left-5">
        <Image src="/home.svg" alt="home" width={50} height={50} />
      </Link>
      <div className="flex gap-20 items-end">
        <div className="flex flex-col gap-4 text-center">
            <Image src="/belajar.png" alt="Belajar" width={300} height={300} />
            <Link
                href="/menu/belajar"
                className="bg-yellow-400 py-2 px-4 outline outline-offset-2 outline-white rounded-md hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
            >
                Belajar
            </Link>
        </div>
        <div className="flex flex-col gap-4 text-center">
            <Image src="/bermain.png" alt="Bermain" width={300} height={300} />
            <Link
                href="/menu/bermain"
                className="bg-yellow-400 py-2 px-4 outline outline-offset-2 outline-white rounded-md hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
            >
                Bermain
            </Link>
        </div>
      </div>
    </main>
  );
}
