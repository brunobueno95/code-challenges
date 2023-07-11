"use client";
import React, { useState } from "react";

const Page = () => {
  const [arrayUnordered, setArrayUnordered] = useState<number[]>([]);
  const [arrayOrdered, setArrayOrdered] = useState<number[]>([]);

  const splitIntoAnArray = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrayUnordered(Array.from(e.target.value).map(Number));
  };

  const orderingArray = () => {
    const sA = [...arrayUnordered];
    const arrayOfZeros = [];
    for (let i = sA.length - 1; i >= 0; i--) {
      if (sA[i] === 0) {
        const zeroValue = sA.splice(i, 1);
        arrayOfZeros.push(zeroValue[0]);
      }
    }

    for (let i = 0; i < arrayOfZeros.length; i++) {
      sA.push(arrayOfZeros[i]);
    }

    setArrayOrdered(sA);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-36 mt-10">
      <h1 className="z-20 text-6xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        Move Zeros
      </h1>
      <p className="text-base text-gray-700 mt-2 font-semibold mx-auto text-center">
        On this challenge, the algorithm is created to detect all the zeros and
        segregate them on the end of the array. To try it out, write some
        numbers with zeros in it, and the output should show all the zeros
        segregated on the end.
      </p>
      <div className="z-22 flex justify-center w-full">
        <input
          onChange={splitIntoAnArray}
          type="text"
          className="z-35 border-2 border-blue-600 rounded-md focus:outline-none focus:border-customPink"
          placeholder="Write your numbers"
        />

        <button
          onClick={orderingArray}
          className="border-2 bg-[#3B5CDD] font-bold text-white mx-2 rounded-md border-[#3B5CDD] p-2 hover:bg-[#D9287C] hover:border-[#D9287C]"
        >
          Check
        </button>
      </div>

      <div className=" z-20 flex justify-center mt-20  text-4xl font-semibold text-[#9A32DF]  ">
        {arrayOrdered.join(", ")}
      </div>
    </div>
  );
};

export default Page;
