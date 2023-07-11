"use client";

import { useState } from "react";

const page = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [textResault, setTextResault] = useState<string>("");

  const reverseOrder = (expString: string) => {
    const arrayInOrder = expString.split(/\s+/).filter(Boolean);
    const arrayReversed = arrayInOrder.reverse().join(" ");
    console.log(arrayReversed);
    setTextResault(arrayReversed);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-36 mt-10">
      <h1 className="z-20 text-6xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        Reverse Sentence
      </h1>
      <p className="text-base text-gray-700 mt-2 font-semibold mx-auto text-center">
        On this challenge, the algorithm is created to reverse the sentence word
        by word. On the outcome, the words stay intact, but comes in the reverse
        order. To try it out, write a sentence on the input.
      </p>
      <div className="z-22 flex justify-center w-full ">
        <input
          className="z-35 border-2 border-blue-600 rounded-md focus:outline-none focus:border-customPink"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className=" border-2 bg-[#3B5CDD] font-bold text-white mx-2 rounded-md border-[#3B5CDD] p-2 hover:bg-[#D9287C] hover:border-[#D9287C]"
          onClick={() => reverseOrder(inputValue)}
        >
          Push
        </button>
      </div>
      <div className=" z-20 flex justify-center mt-20  text-4xl font-semibold text-[#9A32DF]  ">
        {textResault}
      </div>
    </div>
  );
};

export default page;
