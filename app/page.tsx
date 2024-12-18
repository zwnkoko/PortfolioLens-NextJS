import Button from "./components/Button";
import Image from "next/image";
import { EXTERNAL_LINKS } from "./constants";

export default function Home() {
  return (
    <div className="flex flex-col justify-center size-full items-center space-y-14">
      <div className="text-center space-y-8">
        <p className="text-transparent bg-clip-text bg-gradient-to-r text-2xl md:text-5xl
          from-blue-600 via-purple-600 to-pink-600
          dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
        > 
          Minimalistic Portfolio Tracker for Retail Investors 
        </p>
        <p className="text-gray-600 dark:text-slate-300 text-sm md:text-lg">
          Effortlessly manage your investments with <br className="md:hidden"/> a sleek, <span className="whitespace-nowrap">user-friendly</span> interface.
        </p>
      </div>

      <div className="flex space-x-6 md:space-x-16">
        <Button 
          label="Source code" 
          id="github-repo" 
          animation={true} 
          variant="secondary"
          href={EXTERNAL_LINKS.github_repo_link}         
          prefix={
            <div className="relative w-8 h-8">
              <Image src={"/github-mark-white.png"} alt="github logo" fill/>
            </div>
          }
        />
        <Button 
          label="Get Started" 
          id="get-started" 
          animation={true}
          prefix={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
          }
        />
      </div>
      
    
    </div>
  );
}

