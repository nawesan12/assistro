export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          Assistro
          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            By Nahuel Santillan &copy; {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
}
