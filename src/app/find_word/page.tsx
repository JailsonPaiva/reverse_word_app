"use client";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [inputPhrase, setInputPhrase] = useState('');
  const [inputWord, setInputWord] = useState('');
  const [resultMensage, setResultMessage] = useState('');


  const findWord = () => {

    let count = 0;

    const inputPhraseArray = inputPhrase.split(' ');

    for (let j = 0; j <= inputPhraseArray.length; j++) {
      const x = inputPhraseArray.length - j;

      if (x !== inputPhraseArray.length && (inputWord === inputPhraseArray[x] ||
        inputWord.toUpperCase() === inputPhraseArray[x] ||
        inputWord.toLowerCase() === inputPhraseArray[x])) {

        console.log(inputPhraseArray[x])
        count++;
      }
    }
    viewResult(count)
  }


  const viewResult = (value: number) => {
    if (value === 0 && inputWord) {
      setResultMessage(`A palavra "${inputWord}" não foi encontrada.`)
    } if (!inputWord) {
      setResultMessage(`Por favor, insira uma palavra.`)
    } if (value !== 0 && inputWord) {
      setResultMessage(`A palavra "${inputWord}" foi encontrada ${value} vez(es).`)
    }
  }


  const clearInput = () => {
    setInputPhrase('');
    setInputWord('');
    setResultMessage('');
  }



  return (
    <>
      <Header />
      <main className="h-screen flex flex-col items-center gap-8 mt-[5rem] overflow-y-hidden">
        <h1 className="text-center text-3xl">Finda a Word in phrase</h1>

        <section className="flex flex-col gap-8 justify-center items-center w-full  md:flex-row md:w-[100%] md:px-8">

          <label
            htmlFor="text_entry"
            className="flex flex-col h-[10rem] w-[70%] md:w-[40%]">Write a Phrase

            <textarea
              name="text-entry"
              id="text-entry"
              className="h-[10rem] flex flex-col justify-center p-2 rounded text-black"
              value={inputPhrase}
              onChange={(e) =>
              setInputPhrase(e.target.value)} />
          </label>

          <label
            htmlFor="word_entry"
            className="flex flex-col h-[5rem]">Write a Word

            <input
              type="text"
              className="min-w-[15rem]  max-w-[5rem] h-[2.5rem] flex flex-col justify-center p-2 rounded text-black"
              onChange={(e) =>
              setInputWord(e.target.value)}
              value={inputWord} />
          </label>

          <button
            className="bg-green-600 hover:bg-green-500 ease-in duration-200 h-[2.8rem] rounded w-[30%] md:max-w-[15%]"
            onClick={() => findWord()}>Search</button>
        </section>

        <section className="flex flex-col gap-4 justify-center items-center mt-[5rem] w-[100%]">
          <h2>Search Result</h2>

          <input
            type="text"
            className="w-[70%] md:w-[40%] h-[4rem] flex flex-col justify-center p-2 rounded"
            readOnly
            value={resultMensage} />

          <button
            className="bg-rose-600 hover:bg-rose-500 ease-in duration-200 h-[2.8rem] rounded  w-[30%] md:max-w-[15%]"
            onClick={() =>
            clearInput()}>Clear</button>

        </section>

      </main>
    </>
  )
}
