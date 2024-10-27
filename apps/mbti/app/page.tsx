"use client";

import { useCallback, useMemo, useState } from "react";

import { ButtonV1 } from "@repo/ui";

import { ANSWERS, QUESTIONS } from "./assets/data";

type Answer = (typeof ANSWERS)[number]["value"];
type MbtiType = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export default function Home() {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<string>("");

  const handleAnswer = useCallback((answer: Answer) => {
    setUserAnswers((prev) => [...prev, answer]);
  }, []);

  const calculateMbti = useCallback(() => {
    const scores = new Map<MbtiType, number>();

    userAnswers.forEach((answer, index) => {
      const question = QUESTIONS[index];
      const answerObj = ANSWERS.find((a) => a.value === answer);

      if (!question || !answerObj) {
        alert(`Invalid question or answer at index ${index}`);
        return;
      }

      const type =
        answerObj.type === "disagree" ? question.disagree : question.agree;
      scores.set(
        type as MbtiType,
        (scores.get(type as MbtiType) || 0) + answerObj.score,
      );
    });
    return [
      (scores.get("E") ?? 0) >= (scores.get("I") ?? 0) ? "E" : "I",
      (scores.get("S") ?? 0) >= (scores.get("N") ?? 0) ? "S" : "N",
      (scores.get("T") ?? 0) >= (scores.get("F") ?? 0) ? "T" : "F",
      (scores.get("J") ?? 0) >= (scores.get("P") ?? 0) ? "J" : "P",
    ].join("");
  }, [userAnswers]);

  const currentQuestion = useMemo(
    () => QUESTIONS[userAnswers.length]?.text,
    [userAnswers.length],
  );

  const isTestCompleted = userAnswers.length === QUESTIONS.length;

  useMemo(() => {
    if (userAnswers.length === QUESTIONS.length) {
      setResult(calculateMbti());
    }
  }, [userAnswers.length, calculateMbti]);

  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        {!isTestCompleted ? (
          <>
            <h2 className="text-2xl font-bold">{currentQuestion}</h2>
            <div className="flex flex-row gap-2">
              {ANSWERS.map((answer) => (
                <ButtonV1
                  key={answer.value}
                  variant="solid"
                  size="lg"
                  onClick={() => handleAnswer(answer.value)}
                >
                  {answer.value}
                </ButtonV1>
              ))}
            </div>
          </>
        ) : (
          <h2 className="text-2xl font-bold">당신의 MBTI 결과: {result}</h2>
        )}
      </div>
    </div>
  );
}
