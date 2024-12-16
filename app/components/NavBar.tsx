import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Drawer from "./Drawer";

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
    <nav id="mobile-nav" className="font-semibold grid md:hidden size-full grid-cols-12">

      <div className="col-span-3 flex items-center">
        <ThemeToggle />
      </div>

      <p className="col-span-6 flex justify-center items-center">
        Portfolio Lens
      </p>

      <div className="col-span-3 flex items-center justify-end relative">
        <Drawer />
      </div>
      
    </nav>
    </>
  )
}

export default NavBar