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
            <Link href="/menu/bernyanyi" className="flex items-center w-max mx-auto gap-4 bg-yellow-400 py-2 px-6 outline outline-offset-2 outline-white rounded-full hover:bg-yellow-200 hover:text-green-500 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 26 26">
                    <g fill="none">
                        <defs>
                            <mask id="pepiconsPopMusicNoteDoubleCircleFilled0">
                                <path fill="#fff" d="M0 0h26v26H0z"/>
                                <g fill="#000" transform="translate(3 3)">
                                    <path fill-rule="evenodd"
                                          d="M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995z"
                                          clip-rule="evenodd"/>
                                    <ellipse cx="14.75" cy="15" rx="3" ry="2.5"/>
                                    <ellipse cx="5.75" cy="16" rx="3" ry="2.5"/>
                                    <path fill-rule="evenodd" d="M15.75 5h2v10h-2zm-9 1h2v10h-2z" clip-rule="evenodd"/>
                                </g>
                            </mask>
                        </defs>
                        <circle cx="13" cy="13" r="13" fill="currentColor"
                                mask="url(#pepiconsPopMusicNoteDoubleCircleFilled0)"/>
                    </g>
                </svg>
                Bernyanyi
            </Link>
        </div>
      </div>
        <div className="flex gap-20 items-end">
            <div className="flex flex-col gap-4 text-center">
                <Image src="/belajar.png" alt="Belajar" width={300} height={300}/>
                <Link
                    href="/menu/belajar"
                    className="flex items-center w-max mx-auto gap-4 bg-yellow-400 py-2 px-6 outline outline-offset-2 outline-white rounded-full hover:text-green-500 hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 56 56">
                        <path fill="currentColor"
                              d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m-6.07-14.812c-2.391 0-4.149.843-4.922 1.547c-.305.234-.61.398-1.102.398c-.61 0-1.101-.305-1.101-1.148V19.773c.843-1.71 3.539-3.093 6.515-3.093c2.649 0 4.875 1.195 5.719 2.812v19.383c-.117-.023-.75-.398-.961-.516c-.68-.422-1.992-1.265-4.148-1.265m12.117 0c-2.156 0-3.492.82-4.149 1.265c-.234.141-.797.54-.96.563v-19.43c.867-1.617 3.093-2.812 5.695-2.812c2.976 0 5.672 1.383 6.515 3.093v18.118c0 .843-.468 1.148-1.078 1.148c-.492 0-.82-.164-1.101-.398c-.774-.703-2.555-1.547-4.922-1.547"/>
                    </svg>
                    Belajar
                </Link>
            </div>
            <div className="flex flex-col gap-4 text-center">
                <Image src="/bermain.png" alt="Bermain" width={300} height={300}/>
                <Link
                    href="/menu/bermain"
                    className="flex items-center w-max mx-auto gap-4 bg-yellow-400 py-2 px-6 outline outline-offset-2 outline-white rounded-full hover:text-green-500 hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-2 14.5v-9l6 4.5z"/>
                    </svg>
                    Bermain
                </Link>
            </div>
        </div>
    </main>
  );
}
