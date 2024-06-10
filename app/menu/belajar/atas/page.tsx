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
                        <img src="/kepala.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Kepala</h1>
                            <p className="text-2xl font-semibold">Bagian utama tubuh yang mengandung otak, mata,
                                telinga,
                                hidung, dan mulut.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/rambut.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Rambut</h1>
                            <p className="text-2xl font-semibold">Helai yang tumbuh di kepala, memberikan perlindungan dan isolasi.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/mata.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Mata</h1>
                            <p className="text-2xl font-semibold">Organ untuk melihat.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/hidung.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Hidung</h1>
                            <p className="text-2xl font-semibold">Digunakan untuk bernapas dan mencium bau.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/telinga.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Telinga</h1>
                            <p className="text-2xl font-semibold">Organ untuk mendengar.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/mulut.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Mulut</h1>
                            <p className="text-2xl font-semibold">Digunakan untuk berbicara, makan, dan bernapas.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/alis.png" className="w-[299px] h-[42px] mt-[9%]"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Alis</h1>
                            <p className="text-2xl font-semibold">Rambut di atas mata yang melindungi mata dari keringat dan kotoran.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Link
                href="/menu/belajar"
                className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
            >
                <Image src="/back.svg" alt="play" width={50} height={50}/>
            </Link>
        </main>
    );
}