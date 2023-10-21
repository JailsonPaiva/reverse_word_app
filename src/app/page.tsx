"use client";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [newValue, setNewValue] = useState(['']);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const cahngeLetters = () => {

    let valor = [];
    let a = ''

    for (let j = 0; j <= inputValue.length; j++) {
      const x = inputValue.length - j;


      if (x !== inputValue.length) {
        // valor.push(inputValue[x]);
        a = a + inputValue[x];
      }
    }
    valor.push(a)
    // const valorForm = valor.toString();
    setNewValue(valor);
  }

  const clearInput = () => {
    setInputValue('');
    setNewValue([]);
  }


  
  return (
    <main className="h-screen flex flex-col gap-5 mt-[5rem] overflow-y-hidden">
      <h1 className="text-center text-3xl ">etnerf arap sárt ed avercsE</h1>

      <section className="flex flex-col items-center gap-6 py-4">

        <h2 className="text-center text-xl">otxet ues avercsE</h2>

        <textarea name="text-entry" id="text-entry" className="min-w-[70%] max-w-[40%] h-[10rem] flex flex-col justify-center p-2" value={inputValue} onChange={handleInputChange}></textarea>

        <button className="bg-green-700 hover:bg-green-800 ease-in duration-200 h-[3rem] rounded min-w-[40%] max-w-[10%]"
          onClick={() => cahngeLetters()}
        >rizudarT</button>

      </section>

      <section className="flex flex-col items-center gap-6 py-4">
        <h2 className="text-center text-xl">odatluseR</h2>


        <textarea name="text-entry" id="text-entry" className="min-w-[70%] max-w-[40%] h-[10rem] flex flex-col justify-center p-2" value={newValue} readOnly></textarea>

        <button className="bg-rose-500 hover:bg-rose-600 ease-in duration-200 h-[3rem] rounded  min-w-[40%] max-w-[10%]" onClick={() => clearInput()}>rapmiL</button>


      </section>

    </main>
  )
}
