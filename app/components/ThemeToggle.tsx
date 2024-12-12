'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(()=> {
    setMounted(true);
  },[]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  if(!mounted) return null;

  return(
    <Button value="Get Started" onClick={toggleTheme}/>
    // <button onClick={() => )} className="bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-white">
    //   Switch to {theme === 'light' ? 'dark' : 'light'} mode
    // </button>
  )
}

export default ThemeToggle;