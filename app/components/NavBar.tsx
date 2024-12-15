import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <>
    {/* Medium and above view port normal nav bar*/}
    <nav className="font-semibold text-lg hidden md:grid size-full grid-cols-6">

      <div className="col-span-3 flex flex-col justify-center">
        <h1 className="md:text-xl">
          Portfolio Lens
        </h1>
      </div>

      <div className="col-span-3 flex flex-row items-center justify-around">
        <Link href="/"> Home </Link>
        <Link href="/dashboard"> Dashboard </Link>
        <Link href="/about"> About </Link>
        <Link href="/contact"> Contact </Link>
        <ThemeToggle />
      </div>
      
    </nav>

    {/* Mobile and small view port hamburger nav bar*/}   
    <nav className="font-semibold grid md:hidden size-full grid-cols-12">

      <button className="col-span-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </button>

      <p className="col-span-6 flex justify-center items-center">
        Portfolio Lens
      </p>

      <div className="col-span-3 flex items-center justify-end">
        <ThemeToggle />
      </div>
      
    </nav>
    </>
  )
}

export default NavBar