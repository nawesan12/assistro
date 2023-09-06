export default function Page() {
  return (
    <>
      <h2 className="font-bold text-3xl mx-8 my-4">Cursos</h2>
      <div className="grid grid-cols-1 lg:px-12 lg:py-4 p-4 gap-4 lg:grid-cols-4 lg:gap-8">
        <section className="h-40 rounded-lg border bg-gray-100 p-4">
          <h3>Tus cursos</h3>
          <ul>
            <li>Curso 1</li>
            <li>Curso 2</li>
            <li>Curso 3</li>
          </ul>
        </section>
        <div className="h-40 rounded-lg border bg-gray-100 p-4"></div>
        <div className="h-40 rounded-lg border bg-gray-100 p-4 lg:col-span-2"></div>
      </div>

      <h2 className="font-bold text-3xl mx-8 my-4">Contenidos</h2>
      <div className="grid grid-cols-1 lg:px-12 lg:py-4 p-4 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-40 rounded-lg border bg-gray-100 p-4"></div>
        <div className="h-40 rounded-lg border bg-gray-100 p-4 lg:col-span-2"></div>
        <div className="h-40 rounded-lg border bg-gray-100 p-4"></div>
      </div>

      <h2 className="font-bold text-3xl mx-8 my-4">Finanzas</h2>
      <div className="grid grid-cols-1 lg:px-12 lg:py-4 gap-4 p-4 lg:grid-cols-4 lg:gap-8">
        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              {" "}
              Proximo sueldo{" "}
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                $404.32{" "}
              </span>

              <span className="text-xs text-gray-500"> from $240.94 </span>
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              {" "}
              Sueldo anterior{" "}
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                $240.94{" "}
              </span>

              <span className="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>
        <div className="h-40 rounded-lg border bg-gray-700 p-4 lg:col-span-2"></div>
      </div>
    </>
  );
}
