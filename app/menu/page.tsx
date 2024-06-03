import Link from "next/link";

export default function Menu() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-8">
      <div>
        <Link
          href="/menu/atas"
          className="bg-yellow-400 py-2 px-4 outline outline-offset-2 outline-white rounded-md hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
        >
          Atas
        </Link>
      </div>
      <div>
        <Link
          href="/menu/tengah"
          className="bg-yellow-400 py-2 px-4 outline outline-offset-2 outline-white rounded-md hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
        >
          Tengah
        </Link>
      </div>
      <div>
        <Link
          href="/menu/bawah"
          className="bg-yellow-400 py-2 px-4 outline outline-offset-2 outline-white rounded-md hover:bg-yellow-600 hover:scale-110 transition-all duration-300 hover:outline-green-700 text-2xl font-bold text-black"
        >
          Bawah
        </Link>
      </div>
    </main>
  );
}
