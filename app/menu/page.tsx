import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-8">
        <audio src="/audio/bgm.mp3" autoPlay loop></audio>
      <Link href="/" className="absolute top-5 left-5">
        <Image src="/home.svg" alt="home" width={50} height={50} />
      </Link>
      <div className="flex gap-20 items-end">
        <div className="flex flex-col gap-4 text-center">
            <Image src="/bernyanyi.png" alt="Berkarya" width={180} height={180} />
            <Link href="/menu/bernyanyi" className="flex items-center w-max mx-auto gap-4 bg-yellow-400 py-2 px-6 outline outline-offset-2 outline-white rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black">
              <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
              </svg>
                Bernyanyi
            </Link>
        </div>
      </div>
      <div className="flex gap-20 items-end">
        <div className="flex flex-col gap-4 text-center">
            <Image src="/belajar.png" alt="Belajar" width={300} height={300} />
            <Link
                href="/menu/belajar"
                className="flex items-center w-max mx-auto gap-4 bg-yellow-400 py-2 px-6 outline outline-offset-2 outline-white rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
            >
              <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
              </svg>
                Belajar
            </Link>
        </div>
        <div className="flex flex-col gap-4 text-center">
            <Image src="/bermain.png" alt="Bermain" width={300} height={300} />
            <Link
                href="/menu/bermain"
                className="flex items-center w-max mx-auto gap-4 bg-yellow-400 py-2 px-6 outline outline-offset-2 outline-white rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
            >
              <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
              </svg>
                Bermain
            </Link>
        </div>
      </div>
    </main>
  );
}
