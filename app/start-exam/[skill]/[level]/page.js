"use client";
import useSWR from "swr";
import { useState } from "react";
import QuestionCard from "@/components/questionCard";
import Link from 'next/link';


export default function StartExam({ params: { skill, level } }) {
  const [quesNumber, setQuesNumber] = useState(0);
  const [userScore, setUserScore] = useState(0);

  const reqObject = { skill: skill, level: level };
  const getQuestions = async (url) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqObject),
    });
    return await response.json();
  };

  const { data, error, isLoading } = useSWR("/api", getQuestions);
  if (error) return <h1>Something Went Wrong...</h1>;
  if (isLoading) return <div>Loading...</div>;

  const onClickNext = (userOption) => {
    if ((quesNumber >= 0) & (quesNumber < 9)) {
      setQuesNumber(quesNumber + 1);
    }
    if (userOption === data.questions[quesNumber].answer) {
      setUserScore(userScore + 1);
    }
  };

  // console.log(userScore)

  return (
    <main className="bg-white flex min-h-screen flex-col items-center p-24">
      <h1 className="text-black font-bold text-xl">
        {reqObject.skill.toUpperCase()}
      </h1>
      <div className="z-10 max-w-5xl w-full items-start font-mono text-sm lg:flex">
        <h1 className="text-zinc-950 font-bold text-xl">Q.{quesNumber + 1}</h1>
        {data.questions !== undefined && (
          <QuestionCard
            data={data.questions[quesNumber]}
            nextFun={onClickNext}
            quesNumber={quesNumber}
          />
        )}
        {quesNumber === 9 && (
          <Link href={`/results/${skill}/${userScore}`} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </Link>
        )}
      </div>
    </main>
  );
}
