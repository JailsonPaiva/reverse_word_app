"use client";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [inputLetter, setInputLetter] = useState('');
  const [resultMensage, setResultMessage] = useState('');


  const findLetter = async () => {
    let count = 0;

    for (let j = 0; j <= inputText.length; j++) {
      const x = inputText.length - j;

      if (x !== inputText.length && (inputLetter === inputText[x] || inputLetter.toUpperCase() === inputText[x] || inputLetter.toLowerCase() === inputText[x])) {
        count++;
      }
    }
    viewResult(count)
  }
  // console.log(result)
  const clearInput = () => {
    setInputText('');
    setInputLetter('');
    setResultMessage('');
  }

  //  ESSA BUCETA NÃO FUNCIONA NÃO SEI O PQ

  const viewResult = (value: number) => {

    if (value === 0 && inputLetter) {
      setResultMessage(`A letra "${inputLetter}" não foi encontrada.`)
      //  console.log('teste')
      //  console.log(result)
    } if (!inputLetter) {
      setResultMessage(`Por favor, insira uma letra.`)
    } if (value !== 0 && inputLetter) {
      setResultMessage(`A letra "${inputLetter}" foi encontrada ${value} vez(es).`)
      // console.log('teste2')

    }
  }


  return (
    <>
      <Header />
      <main className="h-screen flex flex-col gap-8 mt-[5rem] overflow-y-hidden">
        <h1 className="text-center text-3xl">Finda a Letter in Word</h1>

        <section className="flex flex-row gap-8 justify-center items-center">

          <label htmlFor="text_entry" className="flex flex-col h-[10rem] w-[40%] ">Write a Text

            <textarea name="text-entry" id="text-entry" className="h-[10rem] flex flex-col justify-center p-2 rounded text-black" value={inputText} onChange={(e) => setInputText(e.target.value)} />
          </label>

          <label htmlFor="letter_entry" className="flex flex-col h-[5rem]">Write a Letter
            <input type="text" className="min-w-[15rem]  max-w-[5rem] h-[2.5rem] flex flex-col justify-center p-2 rounded text-black" onChange={(e) => setInputLetter(e.target.value)} onKeyUp={() => setResultMessage('')} value={inputLetter} />

          </label>

          <button className="bg-green-600 hover:bg-green-500 ease-in duration-200 h-[2.8rem] rounded  min-w-[20%] max-w-[10%]" onClick={() => findLetter()} >Search</button>
        </section>

        <section className="flex flex-col gap-4 justify-center items-center mt-[5rem]">
          <h2>Search Result</h2>

          <input type="text" className="min-w-[40%] max-w-[20%] h-[4rem] flex flex-col justify-center p-2 rounded" readOnly value={resultMensage} />


          <button className="bg-rose-600 hover:bg-rose-500 ease-in duration-200 h-[2.8rem] rounded  min-w-[20%] max-w-[10%]" onClick={() => clearInput()}>Clear</button>


        </section>



      </main>
    </>
  )
}
