import Link from "next/link"

export default function Header() {
    return (
        <header className="flex flex-row items-center h-[5rem] w-full px-2">
            <ul className="w-full flex justify-center gap-5 ">

                <Link
                    href="/"
                    className="w-36 h-9 bg-violet-950 hover:bg-violet-900 ease-in duration-200 flex justify-center items-center rounded text-white text-xs md:text-base">Rever Word</Link>

                <Link
                    href="/find_letter"
                    className="w-36 h-9 bg-violet-950 hover:bg-violet-900 ease-in duration-200 flex justify-center items-center rounded text-white text-xs md:text-base">Find a Letter</Link>


                <Link
                    href="/find_word"
                    className="w-36 h-9 bg-violet-950 hover:bg-violet-900 ease-in duration-200 flex justify-center items-center rounded text-white text-xs md:text-base">Find a Word</Link>

            </ul>
        </header>
    )
}

