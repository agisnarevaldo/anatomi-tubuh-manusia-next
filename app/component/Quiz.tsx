"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

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
    // Add more questions here
    {
      questionText: 'Aku bisa menggenggam, memegang, dan menulis. Siapakah aku?',
        answerOptions: [
            { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
            { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: true },
            { answerText: 'Hair', imageSrc: '/rambut.png', isCorrect: false },
            { answerText: 'Shoulder', imageSrc: '/pundak.png', isCorrect: false },
        ],
    },
    {
      questionText: 'Aku bisa merasakan bau enak atau bau tidak sedap, juga digunakan untuk bernapas Siapakah aku?',
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
            { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
            { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: false },
            { answerText: 'Eye', imageSrc: '/mata.png', isCorrect: true },
            { answerText: 'Nose', imageSrc: '/hidung.png', isCorrect: false },
        ],
    },
    {
        questionText: 'Aku digunakan untuk makan dan berbicara, aku ada di wajahmu. Siapakah aku?',
            answerOptions: [
                { answerText: 'Foot', imageSrc: '/kaki.png', isCorrect: false },
                { answerText: 'Hand', imageSrc: '/tangan.png', isCorrect: false },
                { answerText: 'Mouth', imageSrc: '/mulut.png', isCorrect: true },
                { answerText: 'Nose', imageSrc: '/hidung.png', isCorrect: false },
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
    }
  ];

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Skor Anda ${score}`);
    }
  };

  return (
    <div className="bg-white outline-offset-2 outline-yellow-400 rounded-3xl px-8 py-2 outline">
      <div className="">
        <div>
          <h1 className="text-3xl font-bold text-black my-3">{questions[currentQuestion].questionText}</h1>
        </div>
        <div className="text-center flex justify-center items-center gap-10">
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index}>
              <Image width={200} height={200} src={answerOption.imageSrc} alt={answerOption.answerText} />
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}