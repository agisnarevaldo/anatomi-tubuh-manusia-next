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
                        <img src="/paha.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Paha</h1>
                            <p className="text-2xl font-semibold">Bagian tubuh antara pinggul dan lutut, terdiri dari otot-otot kuat yang membantu dalam berjalan, berlari, dan melompat.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/lutut.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Lutut</h1>
                            <p className="text-2xl font-semibold"> Sendi antara paha dan betis, memungkinkan gerakan fleksi dan ekstensi pada kaki.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/betis.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Betis</h1>
                            <p className="text-2xl font-semibold">Bagian belakang kaki bawah antara lutut dan pergelangan kaki, terdiri dari otot yang membantu dalam berjalan dan berlari.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex justify-center w-full gap-4">
                        <img src="/kaki.png"/>
                        <div
                            className="text-center outline outline-offset-2 outline-yellow-400 bg-white flex flex-col my-2 justify-center gap-4 w-1/2 rounded-3xl px-4 ">
                            <h1 className="text-4xl font-bold">Kaki</h1>
                            <p className="text-2xl font-semibold">Bagian tubuh di bawah pergelangan kaki, digunakan untuk berdiri, berjalan, dan berlari, serta memiliki peran penting dalam menjaga keseimbangan tubuh.</p>
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