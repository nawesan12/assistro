import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-evenly">
      <Image className="puff-in-center" src="/assistro.png" width={500} height={100} alt="Assistro" />

      <nav>
        <ul>
          <li className="p-4 rounded-md border-2 border-l-indigo-300 my-4 bg-white">
            <Link href="/register/teacher">Soy profesor</Link>
          </li>
          <li className="p-4 rounded-md border-2 border-l-indigo-300 my-4 bg-white">
            <Link href="/register/student">Soy estudiante</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}