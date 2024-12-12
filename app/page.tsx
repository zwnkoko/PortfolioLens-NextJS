import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center size-full items-center">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center text-2xl md:text-6xl"> 
        Minimalistic Portfolio Tracker for Retail Investors 
      </p>

      <Button label="Get Started" id="get-started" animation={true} />
    
      

    </div>
  );
}
