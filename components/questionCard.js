"use client";
import { useState } from "react";

const QuestionCard = ({ data, nextFun, quesNumber }) => {
  const { question, options } = data;
  const [userOption, setUserOption] = useState("");
  console.log(quesNumber);

  const validateOption = () => {
    nextFun(userOption);
  };

  const onChangeOption = (event) => {
    setUserOption(event.target.value);
  };
  return (
    <div className="p-8 text-blue">
      <h1 className="text-3xl mb-4">{question}</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {options.map((str, index) => (
          <label
            key={index}
            className={`${
              userOption === str ? "bg-green-500" : "bg-blue"
            } flex justify-between text-white p-4 rounded-md`}
            htmlFor={str}
          >
            <input
              onChange={onChangeOption}
              name={question}
              checked={userOption === str}
              type="radio"
              id={str}
              value={str}
            />
            {str}
          </label>
        ))}
      </form>

      {quesNumber !== 9 && (
        <button
          onClick={validateOption}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
