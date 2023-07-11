"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [inputString, setInputString] = useState<string>("");
  const [resultString, setResultString] = useState<string>("");

  const findBiggestString = (entireString: string) => {
    let allSubs = [];
    let eachSubs = "";

    for (let i = 0; i < entireString.length; i++) {
      let currentChar = entireString[i];
      if (eachSubs.includes(currentChar)) {
        allSubs.push(eachSubs);
        eachSubs = currentChar;
      } else {
        eachSubs += currentChar;
      }
    }
    allSubs.push(eachSubs);
    console.log(allSubs);

    let biggestString = "";
    allSubs.forEach((currentSubs) => {
      biggestString =
        currentSubs.length > biggestString.length ? currentSubs : biggestString;
    });

    console.log(biggestString);
    setResultString(biggestString);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-36 mt-10">
      <h1 className="z-20 text-6xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        String No Repeat Finder
      </h1>
      <p className="text-base text-gray-700 mt-2 font-semibold mx-auto text-center">
        On this challenge, the algorithm is created to find the biggest piece of
        text that does not have any repetitive characters. So, if you write a
        sequence of characters in the input, the output will be the longest
        string without any repetitive characters.
      </p>
      <div className="z-22 flex justify-center w-full ">
        <input
          onChange={(e) => {
            setInputString(e.target.value);
          }}
          type="text"
          className="z-35 border-2 border-blue-600 rounded-md focus:outline-none focus:border-customPink"
          placeholder="  Write your string"
        />

        <button
          onClick={() => findBiggestString(inputString)}
          className=" border-2 bg-[#3B5CDD] font-bold text-white mx-2 rounded-md border-[#3B5CDD] p-2 hover:bg-[#D9287C] hover:border-[#D9287C]"
        >
          Check{" "}
        </button>
      </div>

      <div className=" z-20 flex justify-center mt-20  text-4xl font-semibold text-[#9A32DF]  ">
        {resultString}
      </div>
     
    </div>
  );
}
