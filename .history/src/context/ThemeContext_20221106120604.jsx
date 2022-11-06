import { createContext } from "react"

export const ThemeContext = createContext();

export default ThemeContextProvider = () => {
    state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }
    return (
        <ThemeContext.Provider value={state}>
            {}
        </ThemeContext.Provider>
        
    );
}