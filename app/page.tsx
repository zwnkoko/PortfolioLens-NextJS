import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center size-full items-center space-y-8 md:space-y-14">
      <div className="text-center space-y-8">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center text-2xl md:text-5xl"> 
          Minimalistic Portfolio Tracker for Retail Investors 
        </p>
        <p className="text-gray-600 dark:text-slate-300 text-sm md:text-lg">
          Effortlessly manage your investments with <br className="md:hidden"/> a sleek, <span className="whitespace-nowrap">user-friendly</span> interface.
        </p>
      </div>

      <div className="flex space-x-6">
        <Button label="Github" id="github-repo" animation={true} variant="tertiary"/>
        <Button label="Get Started" id="get-started" animation={true} />
      </div>
      
    
    </div>
  );
}
