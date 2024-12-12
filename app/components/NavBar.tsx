import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="font-bold text-lg hidden md:grid size-full grid-cols-6">
        <div className="col-span-3 flex flex-col justify-center">
            <h1 className="md:text-xl">
                Portfolio Lens
            </h1>
        </div>
        <div className="col-span-3 flex flex-row items-center justify-around">
            <Link href="/"> Home </Link>
            <Link href="/about"> About </Link>
            <Link href="/contact"> Contact </Link>
            <ThemeToggle />
        </div>
    </nav>
  )
}

export default NavBar