import Image from "next/image";
import Link from "next/link";

export default function Page () {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
            <Link href="/menu" className="absolute top-5 left-5">
                <Image src="/back.svg" alt="home" width={50} height={50} />
            </Link>
            <video width="768" height="432" controls className="mx-auto rounded-3xl outline outline-offset-4 outline-4 outline-yellow-400">
                <source  src="/videos/bernyanyi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    )
}