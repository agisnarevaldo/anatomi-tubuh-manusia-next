import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-black">
      <h1 className="text-4xl font-bold">Mengenal Anggota Tubuh Manusia</h1>
      <Link
        href="/menu"
        className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
      >
        <Image src="/play.svg" alt="play" width={50} height={50} />
      </Link>
      <Image src="/anatomi-tubuh.png" alt="anatomi" width={350} height={350}></Image>
    </main>
  );
}
