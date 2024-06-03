"use client";

import Reset from "@/app/component/reset";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Tengah() {
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
      case "tangan":
        return "tangan";
      case "pundak":
        return "pundak";
      case "dada":
        return "dada";
      case "perut":
        return "perut";
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
        <button onClick={() => handleImageClick("tangan")}>
          <Image
            className="tangan"
            src="/tangan.png"
            alt="tangan"
            width={100}
            height={100}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("pundak")}>
          <Image
            className="pundak"
            src="/pundak.png"
            alt="pundak"
            width={200}
            height={200}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("dada")}>
          <Image
            className="dada"
            src="/dada.png"
            alt="dada"
            width={200}
            height={200}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("perut")}>
          <Image
            className="perut"
            src="/perut.png"
            alt="perut"
            width={150}
            height={150}
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
