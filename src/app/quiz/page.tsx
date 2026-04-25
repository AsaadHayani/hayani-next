"use client";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { QuizQuestions } from "../exports";

interface QuestionProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans: number;
}

const Page = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const question = QuizQuestions[index];

  const options = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];

  const checkAns = (i: number) => {
    if (lock) return;

    setSelected(i);
    setLock(true);

    if (question.ans === i) setScore((prev) => prev + 1);
  };

  const clickNext = () => {
    if (!lock) return;

    if (index === QuizQuestions.length - 1) {
      setResult(true);
      return;
    }

    setIndex((prev) => prev + 1);
    setSelected(null);
    setLock(false);
  };

  const clickReset = () => {
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
    setSelected(null);
  };

  return (
    <div className="my-width text-center">
      <h1 className="my-title my-4">Quiz App</h1>

      <div className="p-6 border my-border rounded-md space-y-5">
        {!result ? (
          <>
            <h2 className="text-xl">
              {index + 1}. {question.question}
            </h2>

            <div className="w-3/4 mx-auto space-y-3">
              {options.map((opt, i) => {
                const optionIndex = i + 1;
                const isCorrect = question.ans === optionIndex;
                const isSelected = selected === optionIndex;

                return (
                  <div
                    key={i}
                    className={`p-3 flex justify-between items-center border my-border rounded-md transition
                      ${lock && isCorrect ? "bg-green-600 text-white" : ""}
                      ${
                        lock && isSelected && !isCorrect
                          ? "bg-red-600 text-white"
                          : ""
                      }
                    `}
                  >
                    <span>{opt}</span>
                    <button
                      disabled={lock}
                      onClick={() => checkAns(optionIndex)}
                      className="my-bg"
                    >
                      <MdArrowForwardIos size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
            <button onClick={clickNext} className="w-full my-bg">
              Next
            </button>
            <div className="w-full bg-gray-300 h-2 rounded-full ">
              <div
                className="my-bg h-2 rounded transition-all duration-300"
                style={{
                  width: `${((index + 1) / QuizQuestions.length) * 100}%`,
                }}
              />
            </div>

            <p className="my-text">
              {index + 1} of {QuizQuestions.length} Questions
            </p>
          </>
        ) : (
          <>
            <button onClick={clickReset} className="my-bg w-full">
              Reset
            </button>

            <h2 className="text-xl mt-4 my-text">
              You scored {score} out of {QuizQuestions.length}
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
