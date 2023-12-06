import React from "react";
import { useThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
    const {toggleTheme} = useThemeContext();

    return (
        <div className="flex justify-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleTheme}>
            Change Theme
        </button>
        </div>
    )
}

export default ThemeToggle;