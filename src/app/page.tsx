import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-evenly">
      <Image className="puff-in-center" src="/assistro.png" width={500} height={100} alt="Assistro" />

      <nav>
        <ul>
          <li>
            <Link href="/register/teacher">Soy profesor</Link>
          </li>
          <li>
            <Link href="/register/student">Soy estudiante</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}