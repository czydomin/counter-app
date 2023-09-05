"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  function handleClickAdd1() {
    return setNumber(number + 1);
  }

  function handleClickMinus1() {
    return setNumber(number - 1);
  }

  function handleClickAdd10() {
    return setNumber(number + 10);
  }

  function handleClickMinus10() {
    return setNumber(number - 10);
  }

  function handleClickReset() {
    return setNumber(0);
  }

  function randomNumberGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleClickRandomAction() {
    let randomNumber = randomNumberGenerate(-100, 100);
    console.log(randomNumber);
    setNumber(randomNumber + number);
  }

  return (
    <main className="flex justify-center bg-pink-200 h-screen gap-4">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-3xl flex justify-center mt-10 ">
          {number}
        </p>
        <div className="flex space-x-10  ">
          <button
            onClick={handleClickAdd1}
            className="bg-pink-500 h-6 w-24 rounded"
          >
            +1
          </button>
          <button
            onClick={handleClickMinus1}
            className="bg-pink-500 h-6 w-24 rounded"
          >
            -1
          </button>
        </div>
        <div className="flex space-x-10  ">
          <button
            onClick={handleClickAdd10}
            className="bg-pink-400 h-6 w-24 rounded"
          >
            +10
          </button>
          <button
            onClick={handleClickMinus10}
            className="bg-pink-400 h-6 w-24 rounded"
          >
            -10
          </button>
        </div>
        <button
          onClick={handleClickRandomAction}
          className="bg-pink-300 h-6 w-58 rounded"
        >
          Random action
        </button>
        <button
          onClick={handleClickReset}
          className="bg-pink-300 h-6 w-58 rounded"
        >
          Reset
        </button>
      </div>
    </main>
  );
}
