import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './style.scss'

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

export default function TestePage() {
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
        if(savedTheme==="isDarkMode"){
            toggleDarkMode()
        }
    }, [])
    
    return (
        <>
            <div className='container'>
                <h1>Light / Dark</h1>
                    <input checked={isDarkMode} onChange={toggleDarkMode} id="switch" type="checkbox" name="theme" />
                    <label className='handleDarkTheme' htmlFor="switch">Toggle</label>
            </div>
        </>
    )
}