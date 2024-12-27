import Link from "next/link";

export default function Header() {
    return (
        <>
        <div className="container mx-auto px-5 mb-10">
        <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
          <Link href="/">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">Travel.</h1>
          </Link>
          <nav>
            <div className="hidden md:flex items-center">
              <div className="ml-4 md:ml-8">
                <Link href="/" target="_self" className="hover:text-gray-900 font-semibold">
                  Blog</Link>
              </div>
              <div className="ml-4 md:ml-8">
                <Link href="/about" target="_self" className="hover:text-gray-900">
                  About</Link>
              </div>
            </div>
          
          </nav>
        </section>
        </div>
        </>
    )
}