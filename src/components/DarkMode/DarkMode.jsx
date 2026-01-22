import { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
    }

    const setLightTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
    }

    const selectedTheme = localStorage.getItem("selectedTheme");

    if(selectedTheme === "light") {
        setLightTheme();
    } else {
        setDarkTheme();
    }

    
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");

        if (selectedTheme === "light") {
            document.body.setAttribute("data-theme", "light");
            setTheme("light");
        } else {
            document.body.setAttribute("data-theme", "dark");
            setTheme("dark");
        }
    }, []);

    //toggle theme
    const toggleTheme = (e) => {
        if (e.target.checked) {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("selectedTheme", "dark");
            setTheme("dark");
        } else {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("selectedTheme", "light");
            setTheme("light");
        }
    };

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                defaultChecked={selectedTheme !== "light"}
                checked={theme === "dark"}
            />

            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </label>
        </div>
    );
};

export default DarkMode;
