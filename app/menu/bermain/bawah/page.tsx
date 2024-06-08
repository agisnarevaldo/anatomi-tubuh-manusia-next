"use client";

import Reset from "@/app/component/reset";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Bawah() {
  const [selectedImage, setSelectedImage] = useState("");
  const [answerText, setAnswerText] = useState("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    const className = image.split(".")[0];
    const answer = getAnswerText(className);
    setAnswerText(answer);
    speakAnswerText(answer);
  };

  const getAnswerText = (className: string) => {
    switch (className) {
      case "paha":
        return "Paha";
      case "lutut":
        return "Lutut";
      case "betis":
        return "betis";
      case "kaki":
        return "kaki";
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
      <Link href="/menu/bermain" className="absolute top-5 left-5">
        <Image src="/back.svg" alt="back" width={50} height={50} />
      </Link>
      <div className="flex w-full gap-12 justify-center">
        <button onClick={() => handleImageClick("paha")}>
          <Image
            className="paha"
            src="/paha.png"
            alt="paha"
            width={150}
            height={150}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("lutut")}>
          <Image
            className="lutut"
            src="/lutut.png"
            alt="lutut"
            width={150}
            height={150}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("betis")}>
          <Image
            className="betis"
            src="/betis.png"
            alt="betis"
            width={150}
            height={150}
          ></Image>
        </button>
        <button onClick={() => handleImageClick("kaki")}>
          <Image
            className="kaki"
            src="/kaki.png"
            alt="kaki"
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
