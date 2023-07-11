"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center gap-8 px-36 mt-10">
        <h1 className="z-20 text-6xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Code Challenges
        </h1>
        <p className="text-base text-gray-700 mt-2 font-semibold mx-auto text-center">
          Welcome to this small application dedicated to completing various code
          challenges using TypeScript. This platform provided me a fun and
          challenging way to enhance my programming skills while utilizing
          logical thinking abilities. Each page on the navigation bar is a
          different code challenge, there will be an explanation about the
          challenge and an input to tryout the result. I thought it was good
          practice and training to transform each challenge into a React
          component.
        </p>

        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    </div>
  );
};

export default Home;
