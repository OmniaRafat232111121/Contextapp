import { createContext } from "react"

export const ThemeContext = createContext();

export default ThemeContextProvider = () => {
    return (
        <ThemeContext.Provider>
        </ThemeContext.Provider>
        
    );
}