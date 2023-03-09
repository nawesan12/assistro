import "@/styles/home.css"

import Image from "next/image"

export default function Home() {
  return (
    <main className="main-home">
      <p className="underline">Hola</p>
      <Image src="/assistro.png" width={500} height={100} alt="Assistro" />
    </main>
  )
}