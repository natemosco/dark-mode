import React, { useEffect } from 'react'
import useLocalStorage from "./useLocalStorage"

export default function DarkMode() {
    const [darkMode, toggleDarkMode] = useLocalStorage("darkmode")
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("normal-mode");
        }
        else if (!darkMode) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("normal-mode");
        }
    }, [darkMode])

    return [darkMode, toggleDarkMode]


}
