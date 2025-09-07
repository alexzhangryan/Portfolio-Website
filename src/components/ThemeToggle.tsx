import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    
    if(isDarkMode){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
    }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
    }

    return (
        <button onClick = {ThemeToggle}>
        {""}
        {isDarkMode ? (
            <Moon className="h-6 w-6 text-blue-900"/> 
        ) : (
         <Sun className="h-6 w-6 text-yellow-300"/>
        )}
        </button>
    );
}