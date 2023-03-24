import { useEffect } from "react";
import { createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();


const initialColors = {
    bg: '--bg',
    bgPanel: '--bg-panel',
    colorHeadings: '--color-headings',
    colorText: '--color-text',
};

const darkModeColors = {
    bg: '#333333',
    bgPanel: '#434343',
    colorHeadings: '#3664FF',
    colorText: '#B5B5B5',
};

const transformKey = key =>
    `--${key.replace(/([A-Z])/, "-$1").toLowerCase()}`;



export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, []);


    const login = (email, password) => {
        const logedUser = {
            id: "123",
            email,
        }

        localStorage.setItem("user", JSON.stringify(logedUser))

        if (password == "mp8.11") {
            setUser({ id: "123", email })
            navigate('/helpDesk')
        }
    };



    const loggout = () => {
        localStorage.removeItem("user");

        setUser(null);
        navigate('/');
    };

    
    // Handle Theme Dark light
    const htmlRef = useRef(document.querySelector('html'));
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            localStorage.setItem("theme", "isDarkMode")
        } else localStorage.removeItem("theme");

    };

    const setColors = (colors) => {
        Object.entries(colors).forEach(([key, value]) => {
            htmlRef.current.style.setProperty(transformKey(key), value);
        });
    };

    const colors = isDarkMode ? darkModeColors : initialColors;
    setColors(colors)

    const savedTheme = localStorage.getItem('theme');

    useEffect(() => {
        if (savedTheme === "isDarkMode") {
            toggleDarkMode()
        }
    }, [])
    
    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user, user, loading, login, loggout, toggleDarkMode, isDarkMode
            }}>

            {children}
        </AuthContext.Provider>
    )
}