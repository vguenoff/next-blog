import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-slate-600 p-4 drop-shadow-xl">
      <div className="prose prose-xl mx-auto flex flex-col justify-between sm:flex-row">
        <h1 className="mb-2 grid place-content-center text-3xl font-bold text-white md:mb-0">
          <Link
            className="text-white/90 no-underline hover:text-white"
            href={'/'}
          >
            V
          </Link>
          <Link
            className="text-white/90 no-underline hover:text-white"
            href={'/reactgg'}
          >
            React.gg
          </Link>
        </h1>
      </div>
    </nav>
  )
}
