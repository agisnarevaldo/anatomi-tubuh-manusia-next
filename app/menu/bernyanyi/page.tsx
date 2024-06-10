import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 overflow-auto">
            <Link href="/menu" className="absolute top-5 left-5">
                <Image src="/back.svg" alt="home" width={50} height={50} />
            </Link>
            <div>
                <iframe width="853" height="480" 
                    className="mx-auto rounded-3xl outline outline-offset-4 outline-4 outline-yellow-400"
                    src="https://www.youtube.com/embed/nNwjhGtgdSQ?si=MyCJKdm2OIPCCldk" 
                    title="Kepala Pundak Lutut Kaki" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </main>
    )
}