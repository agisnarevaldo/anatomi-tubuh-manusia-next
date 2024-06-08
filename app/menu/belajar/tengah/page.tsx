import Image from "next/image";
import Link from "next/link";

// Komponen untuk tombol "Next"
function NextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={`${className} custom-arrow`}
            style={{...style, display: "block", background: "red"}}
            onClick={onClick}
        />
    );
}

// Komponen untuk tombol "Prev"
function PrevArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={`${className} custom-arrow`}
            style={{...style, display: "block", background: "green"}}
            onClick={onClick}
        />
    );
}

export default function Page() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-black">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/tangan.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Kepala</h1>
                            <p className="text-2xl font-semibold">Bagian tubuh yang digunakan untuk memegang, mengambil, dan melakukan banyak aktivitas lainnya.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/pundak.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Pundak</h1>
                            <p className="text-2xl font-semibold">Sendi antara lengan atas dan tubuh, memungkinkan berbagai gerakan lengan.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/dada.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Dada</h1>
                            <p className="text-2xl font-semibold">Bagian depan tubuh antara leher dan perut, melindungi organ-organ vital seperti jantung dan paru-paru.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/perut.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Perut</h1>
                            <p className="text-2xl font-semibold">Bagian tubuh di bawah dada, berisi organ-organ pencernaan seperti lambung dan usus.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Link
                href="/menu"
                className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
            >
                <Image src="/back.svg" alt="play" width={50} height={50}/>
            </Link>
        </main>
    );
}