"use client";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [inputPhrase, setInputPhrase] = useState('');
  const [inputWord, setInputWord] = useState('');
  const [result, setResult] = useState(0);


  const findLetter = () => {

    let count = 0;

    for (let j = 0; j <= inputPhrase.length; j++) {
      const x = inputPhrase.length - j;

      if (x !== inputPhrase.length && (inputWord === inputPhrase[x] || inputWord.toUpperCase() === inputPhrase[x] || inputWord.toLowerCase() === inputPhrase[x])) {

        console.log(inputPhrase[x])
        count ++;

      }
    }

    setResult(count);
    // console.log(inputText)
  }

  const clearInput = () => {
    setInputPhrase('');
    setInputWord('');
    setResult(0);
  }



  return (
    <>
      <Header />
      <main className="h-screen flex flex-col gap-8 mt-[5rem] overflow-y-hidden">
        <h1 className="text-center text-3xl">Finda a Word in phrase</h1>

        <section className="flex flex-row gap-8 justify-center items-center">

          <label htmlFor="text_entry" className="flex flex-col h-[10rem] w-[40%] ">Write a Phrase

            <textarea name="text-entry" id="text-entry" className="h-[10rem] flex flex-col justify-center p-2 rounded text-black" value={inputPhrase} onChange={(e) => setInputPhrase(e.target.value)}/>
          </label>

          <label htmlFor="letter_entry" className="flex flex-col h-[5rem]">Write a Word

          <input type="text" className="min-w-[15rem]  max-w-[5rem] h-[2.5rem] flex flex-col justify-center p-2 rounded text-black" onChange={(e) => setInputWord(e.target.value)} value={inputWord}/>

          </label>

          <button className="bg-green-600 hover:bg-green-500 ease-in duration-200 h-[2.8rem] rounded  min-w-[20%] max-w-[10%]" onClick={() => findLetter()}>Search</button>
        </section>

        <section className="flex flex-col gap-4 justify-center items-center mt-[5rem]">
          <h2>Search Result</h2>

          <input type="text" className="min-w-[40%] max-w-[20%] h-[4rem] flex flex-col justify-center p-2 rounded" readOnly  value={result !== 0 ? `A letra "${inputWord}" foi encontrada ${result} vezes` : ''}/>


          <button className="bg-rose-600 hover:bg-rose-500 ease-in duration-200 h-[2.8rem] rounded  min-w-[20%] max-w-[10%]" onClick={() => findLetter()}>Clear</button>


        </section>



      </main>
    </>
  )
}
