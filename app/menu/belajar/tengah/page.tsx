"use client";

import Image from "next/image";
import Link from "next/link";

// Komponen untuk tombol "Next"
function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow`}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

// Komponen untuk tombol "Prev"
function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow`}
            style={{ ...style, display: "block", background: "green" }}
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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-black">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/tangan.png" width={200} />
                        <div className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Tangan (Hand)</h1>
                            <p className="text-2xl font-semibold">
                                Bagian tubuh yang digunakan untuk memegang, mengambil, dan
                                melakukan banyak aktivitas lainnya.
                            </p>
                            <button
                                onClick={() => {
                                    const audio = new Audio("/audio/tangan.mp3");
                                    audio.play();
                                }}
                                className="w-max mx-auto bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
                            >
                                <Image
                                    src="/play.svg"
                                    alt="play audio"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <div className="flex flex-col justify-center">
                            <Image
                                src="/pundak.png"
                                alt="pundak"
                                width={300}
                                height={300}
                            ></Image>
                        </div>
                        <div className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Pundak (Shoulders)</h1>
                            <p className="text-2xl font-semibold">
                                Sendi antara lengan atas dan tubuh, memungkinkan berbagai
                                gerakan lengan.
                            </p>
                            <button
                                onClick={() => {
                                    const audio = new Audio("/audio/pundak.mp3");
                                    audio.play();
                                }}
                                className="w-max mx-auto bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
                            >
                                <Image
                                    src="/play.svg"
                                    alt="play audio"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <div className="flex flex-col justify-center">
                            <Image
                                src="/dada.png"
                                alt="pundak"
                                width={300}
                                height={300}
                            ></Image>
                        </div>
                        <div className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Dada (Chest)</h1>
                            <p className="text-2xl font-semibold">
                                Bagian depan tubuh antara leher dan perut, melindungi
                                organ-organ vital seperti jantung dan paru-paru.
                            </p>
                            <button
                                onClick={() => {
                                    const audio = new Audio("/audio/dada.mp3");
                                    audio.play();
                                }}
                                className="w-max mx-auto bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
                            >
                                <Image
                                    src="/play.svg"
                                    alt="play audio"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <div className="flex flex-col justify-center">
                            <Image
                                src="/perut.png"
                                alt="pundak"
                                width={300}
                                height={300}
                            ></Image>
                        </div>
                        <div className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Perut (Stomach)</h1>
                            <p className="text-2xl font-semibold">
                                Bagian tubuh di bawah dada, berisi organ-organ pencernaan
                                seperti lambung dan usus.
                            </p>
                            <button
                                onClick={() => {
                                    const audio = new Audio("/audio/perut.mp3");
                                    audio.play();
                                }}
                                className="w-max mx-auto bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
                            >
                                <Image
                                    src="/play.svg"
                                    alt="play audio"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
            <Link
                href="/menu/belajar/"
                className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
            >
                <Image src="/back.svg" alt="play" width={50} height={50} />
            </Link>
        </main>
    );
}
