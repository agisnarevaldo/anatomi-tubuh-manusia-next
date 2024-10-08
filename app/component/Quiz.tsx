"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showFinalPopup, setShowFinalPopup] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(questions[currentQuestion].questionText);
    utterance.lang = 'id-ID';
    speechSynthesis.speak(utterance);
  }, [currentQuestion]);

  const questions = [
    {
      questionText: 'Aku tumbuh di atas kepalamu dan selalu ikut kamu kemanapun pergi. Apakah aku?',
      answerOptions: [
        { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: false },
        { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
        { answerText: 'Hair', imageSrc: '/rambut.png', isCorrect: true },
        { answerText: 'Shoulder', imageSrc: '/pundak.png', isCorrect: false },
      ],
    },
    {
      questionText: 'Aku bisa menggenggam, memegang, dan menulis. Siapakah aku?',
      answerOptions: [
        { answerText: 'Shoulder', imageSrc: '/pundak.png', isCorrect: false },
        { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: true },
        { answerText: 'Hair', imageSrc: '/rambut.png', isCorrect: false },
        { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
      ],
    },
    {
      questionText: 'Aku bisa merasakan bau enak atau bau tidak sedap, juga digunakan untuk bernapas. Siapakah aku?',
      answerOptions: [
        { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
        { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: false },
        { answerText: 'Head', imageSrc: '/rambut.png', isCorrect: false },
        { answerText: 'Nose', imageSrc: '/hidung.png', isCorrect: true },
      ],
    },
    {
      questionText: 'Aku bisa melihat, membaca, dan menonton. Siapakah aku?',
      answerOptions: [
        { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: false },
        { answerText: 'Eye', imageSrc: '/mata.png', isCorrect: true },
        { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
        { answerText: 'Nose', imageSrc: '/hidung.png', isCorrect: false },
      ],
    },
    {
      questionText: 'Aku digunakan untuk makan dan berbicara, aku ada di wajahmu. Siapakah aku?',
      answerOptions: [
        { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: false },
        { answerText: 'Mouth', imageSrc: '/mulut.png', isCorrect: true },
        { answerText: 'Nose', imageSrc: '/hidung.png', isCorrect: false },
        { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
      ],
    },
    {
      questionText: 'Aku bisa mendengar, aku ada di kepalamu. Siapakah aku?',
      answerOptions: [
        { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
        { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: false },
        { answerText: 'Ear', imageSrc: '/telinga.png', isCorrect: true },
        { answerText: 'Nose', imageSrc: '/hidung.png', isCorrect: false },
      ],
    },
    
  ];

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Jawaban Anda benar!");
      setShowPopup(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      setFeedback(null);
    }

    const nextQuestion = currentQuestion + 1;
    setTimeout(() => {
      setShowPopup(false); // Hide the popup
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setFeedback(null);
      } else {
        setShowFinalPopup(true);
      }
    }, 3000); // Delay sebelum lanjut ke soal berikutnya
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalPopup(false);
  };

  const handleGoBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowFinalPopup(false);
    }
  };

  return (
    <div className="bg-white outline-offset-2 outline-yellow-400 rounded-3xl px-8 py-2 outline">
      <audio ref={audioRef} src="/audio/yee.mp3" />
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-500">{feedback}</h2>
          </div>
        </div>
      )}
      {showFinalPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Image src="/party.gif" alt="paty" width={400} height={400} />
            <h2 className="text-2xl font-bold text-black mb-4">Skor Anda: {score}</h2>
            <div className="flex justify-center">
              <button onClick={handleRestart} className=" m-2">
                <svg
                  className="fill-blue-600 hover:fill-blue-400"
                  //   fill="#000000"
                  width="42px"
                  height="42px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
              
              {/* <button onClick={handleGoBack} className="m-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              </button> */}
            </div>
          </div>
        </div>
      )}
      <div className="">
        <div>
          <h1 className="text-3xl font-bold text-black my-3">{questions[currentQuestion].questionText}</h1>
        </div>
        <div className="text-center flex justify-center items-center gap-10">
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index} className="flex flex-col items-center">
              <Image width={200} height={200} src={answerOption.imageSrc} alt={answerOption.answerText} />
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
