"use client";

import Reset from "@/app/component/reset";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Atas() {
  const [selectedImage, setSelectedImage] = useState("");
  const [answerText, setAnswerText] = useState("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    const className = image.split(".")[0];
    const answer = getAnswerText(className);
    setAnswerText(answer);
    speakAnswerText(answer);
  };

  const getAnswerText = (image: string) => {
    switch (image) {
      case "kepala":
        return "kepala";
      case "rambut":
        return "rambut";
      case "mata":
        return "mata";
      case "hidung":
        return "hidung";
      case "telinga":
        return "telinga";
      case "mulut":
        return "mulut";
      case "alis":
        return "alis";
      default:
        return "";
    }
  };

  const speakAnswerText = (text: string) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-12 text-slate-900">
      <Link href="/menu" className="absolute top-5 left-5">
        <Image src="/back.svg" alt="back" width={50} height={50} />
      </Link>
      <div className="flex w-full gap-12 justify-center">
        <button onClick={() => handleImageClick("kepala")}>
          <Image
            className="kepala"
            src="/kepala.png"
            alt="kepala"
            width={100}
            height={100}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("rambut")}>
          <Image
            className="rambut"
            src="/rambut.png"
            alt="rambut"
            width={100}
            height={100}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("mata")}>
          <Image
            className="mata"
            src="/mata.png"
            alt="mata"
            width={100}
            height={100}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("hidung")}>
          <Image
            className="hidung"
            src="/hidung.png"
            alt="hidung"
            width={100}
            height={100}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("telinga")}>
          <Image
            className="telinga"
            src="/telinga.png"
            alt="telinga"
            width={100}
            height={100}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("mulut")}>
          <Image
            className="mulut"
            src="/mulut.png"
            alt="mulut"
            width={100}
            height={100}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("alis")}>
          <Image
            className="alis"
            src="/alis.png"
            alt="alis"
            width={200}
            height={200}
          ></Image>
        </button>
      </div>
      <div className="answer flex items-center gap-2">
        <h3 className="text-2xl font-bold">Jawaban:</h3>
        {selectedImage && (
          <div className="answer-text text-2xl font-bold">
            <p>{getAnswerText(selectedImage)}</p>
          </div>
        )}
      </div>
      <Reset onClick={() => setSelectedImage("")} />
    </main>
  );
}
