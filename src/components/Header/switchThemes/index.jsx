import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth'
import './style.scss'

export const SwitchThemes = () => {
    const { toggleDarkMode, isDarkMode } = useContext(AuthContext)
    return (
        <>
            <input checked={isDarkMode} onChange={toggleDarkMode} id="switch" type="checkbox" name="theme" />
            <label className='handleDarkTheme' htmlFor="switch">Toggle</label>
        </>
    )
}