import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-center items-center h-[5rem] w-full">
            <ul className="w-full flex gap-5 pl-10 ">

                <Link href="/" className="w-36 h-9 bg-violet-950 hover:bg-violet-900 ease-in duration-200 flex justify-center items-center rounded text-white">Rever Word</Link>

                <Link href="/find_letter" className="w-36 h-9 bg-violet-950 hover:bg-violet-900 ease-in duration-200 flex justify-center items-center rounded text-white">Find a Letter</Link>


                <Link href="/find_word" className="w-36 h-9 bg-violet-950 hover:bg-violet-900 ease-in duration-200 flex justify-center items-center rounded text-white">Find a Word</Link>

            </ul>
        </header>
    )
}

