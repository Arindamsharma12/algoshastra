import React, { useEffect, useState } from "react";
import Problem from "./Problem";
import Result from "./Result";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const problem = [
  {
    questionNo: 1,
    description: "What is HTML?",
    options: [
      { id: "_1", option: "Hypertext Markup Language", isCorrect: true },
      { id: "_2", option: "Hypertext Machine Learning", isCorrect: false },
      { id: "_3", option: "Hypertransfer Madeup Language", isCorrect: false },
      { id: "_4", option: "None", isCorrect: false },
    ],
    explaination: "HTML stands for Hypertext Markup Language.",
  },
  {
    questionNo: 2,
    description: "What is 2+2?",
    options: [
      { id: 1, option: "7", isCorrect: false },
      { id: 2, option: "4", isCorrect: true },
      { id: 3, option: "6", isCorrect: false },
      { id: 4, option: "9", isCorrect: false },
    ],
    explaination: "2+2 = 4",
  },
  {
    questionNo: 3,
    description: "Which of these is a programming language?",
    options: [
      { id: 1, option: "HTML", isCorrect: false },
      { id: 2, option: "Python", isCorrect: true },
      { id: 3, option: "CSS", isCorrect: false },
      { id: 4, option: "HTTP", isCorrect: false },
    ],
    explaination:
      "Python is a programming language, whereas HTML and CSS are markup and styling languages.",
  },
  {
    questionNo: 4,
    description: "Who is the founder of Microsoft?",
    options: [
      { id: 1, option: "Steve Jobs", isCorrect: false },
      { id: 2, option: "Bill Gates", isCorrect: true },
      { id: 3, option: "Elon Musk", isCorrect: false },
      { id: 4, option: "Mark Zuckerberg", isCorrect: false },
    ],
    explaination: "Bill Gates co-founded Microsoft in 1975.",
  },
  {
    questionNo: 5,
    description: "Which tag is used to create a hyperlink in HTML?",
    options: [
      { id: 1, option: "<a>", isCorrect: true },
      { id: 2, option: "<h1>", isCorrect: false },
      { id: 3, option: "<p>", isCorrect: false },
      { id: 4, option: "<link>", isCorrect: false },
    ],
    explaination: "The `<a>` tag is used to create hyperlinks in HTML.",
  },
  {
    questionNo: 6,
    description: "What does CSS stand for?",
    options: [
      { id: 1, option: "Cascading Style Sheet", isCorrect: true },
      { id: 2, option: "Computer Style Sheet", isCorrect: false },
      { id: 3, option: "Creative Style System", isCorrect: false },
      { id: 4, option: "Coded Style System", isCorrect: false },
    ],
    explaination:
      "CSS stands for Cascading Style Sheet, used for styling web pages.",
  },
  {
    questionNo: 7,
    description: "Which company developed JavaScript?",
    options: [
      { id: 1, option: "Microsoft", isCorrect: false },
      { id: 2, option: "Netscape", isCorrect: true },
      { id: 3, option: "Google", isCorrect: false },
      { id: 4, option: "Apple", isCorrect: false },
    ],
    explaination: "Netscape developed JavaScript in 1995.",
  },
  {
    questionNo: 8,
    description: "Which of these is a NoSQL database?",
    options: [
      { id: 1, option: "MySQL", isCorrect: false },
      { id: 2, option: "PostgreSQL", isCorrect: false },
      { id: 3, option: "MongoDB", isCorrect: true },
      { id: 4, option: "Oracle", isCorrect: false },
    ],
    explaination:
      "MongoDB is a NoSQL database, while MySQL and PostgreSQL are relational databases.",
  },
  {
    questionNo: 9,
    description: "What does React use to update the UI efficiently?",
    options: [
      { id: 1, option: "Real DOM", isCorrect: false },
      { id: 2, option: "Virtual DOM", isCorrect: true },
      { id: 3, option: "Shadow DOM", isCorrect: false },
      { id: 4, option: "Web DOM", isCorrect: false },
    ],
    explaination:
      "React uses a Virtual DOM to optimize UI rendering and updates.",
  },
  {
    questionNo: 10,
    description: "Which of these is a backend framework?",
    options: [
      { id: 1, option: "React", isCorrect: false },
      { id: 2, option: "Angular", isCorrect: false },
      { id: 3, option: "Django", isCorrect: true },
      { id: 4, option: "Vue", isCorrect: false },
    ],
    explaination:
      "Django is a backend framework, whereas React, Angular, and Vue are frontend frameworks.",
  },
];

function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [iskeydown, setIsKeydonw] = useState(false);
  const { transcript, listening } = useSpeechRecognition();
  const voiceCommands = [
    "Quiz is started...now",
    `Question Number ${problem[currentIndex].questionNo}... ${problem[currentIndex].description}...options are... number 1 ${problem[currentIndex].options[0].option}...number 2 ${problem[currentIndex].options[1].option}...number 3 ${problem[currentIndex].options[2].option}...number 4 ${problem[currentIndex].options[3].option}....press any key to repeat...or say the option number to submit the answer`,
  ];
  useEffect(() => {
    const handleKeyPress = () => {
      handleSpeak(voiceCommands[1]);
    };
    handleSpeak(voiceCommands[0]);
    setTimeout(() => {
      handleSpeak(voiceCommands[1]);
    }, 2000);
    // window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyPress);
    return ()=>{
      window.removeEventListener("keydown",handleKeyPress)
    }
  }, [currentIndex]);

  const speak = (text) => {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.5;
    window.speechSynthesis.speak(speech);
  };

  const handleSpeak = (text) => {
    speak(text);
  };

  const handleResult = () => {
    if (currentIndex == problem.length - 1) {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setIsComplete(false);
    setCurrentIndex(0);
  };

  return isComplete ? (
    <Result
      score={score}
      totalQuestions={problem.length}
      onRestart={handleRestart}
    />
  ) : (
    <>
      <Problem
        problem={problem[currentIndex]}
        setScore={setScore}
        setCurrentIndex={setCurrentIndex}
        handleResult={handleResult}
      />
    </>
  );
}

export default Test;
