"use client";

import Image from "next/image";
import Link from "next/link";

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
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 overflow-auto">

            <div className="carousel w-full">
                <div id="slide1" className="w-full py-2 relative carousel-item">
                    <div className="video-container mx-auto w-full">
                        <iframe width="853" height="480"
                                className="mx-auto rounded-3xl outline outline-offset-4 outline-4 outline-yellow-400"
                                src="https://www.youtube.com/embed/PeH7Jx5P17o?autoplay=1&si=yE5mIUOP9WiuvF93"
                                title="Kepala Pundak Lutut Kaki" frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-7">
                        <a href="#slide2" className="btn btn-circle bg-yellow-500 text-black hover:bg-yellow-600">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle bg-yellow-500 text-black hover:bg-yellow-600">
                            ❯
                        </a>
                    </div>
                </div>

                <div id="slide2" className="w-full py-2 relative carousel-item">
                    <div className="video-container mx-auto">
                        <iframe width="853" height="480"
                                className="mx-auto rounded-3xl outline outline-offset-4 outline-4 outline-yellow-400"
                                src="https://www.youtube.com/embed/t13g4HkV-ZU?autoplay=1&si=8XG3aL2bgGWrmjFu"
                                title="Kepala Pundak Lutut Kaki" frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-7">
                        <a href="#slide1" className="btn btn-circle bg-yellow-500 text-black hover:bg-yellow-600 border">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle bg-yellow-500 text-black hover:bg-yellow-600">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
            <Link
                href="/menu"
                className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
            >
                <Image src="/back.svg" alt="home" width={50} height={50}/>
            </Link>
        </main>
    )
}