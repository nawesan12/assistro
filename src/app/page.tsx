import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-evenly">
      <Image
        className="puff-in-center"
        src="/assistro.png"
        width={500}
        height={100}
        alt="Assistro"
      />

      <nav>
        <ul className="flex flex-col gap-4 items-center">
          <li>
            <Link
              className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="/register/teacher"
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

              <span className="relative block border border-current bg-white px-8 py-3">
                Soy profesor
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="/register/student"
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

              <span className="relative block border border-current bg-white px-8 py-3">
                Soy estudiante
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
