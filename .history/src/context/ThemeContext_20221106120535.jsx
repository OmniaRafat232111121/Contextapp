import { createContext } from "react"

export const ThemeContext = createContext();

export default ThemeContextProvider = () => {
    state = {
        isLightTheme: true;
    }
    return (
        <ThemeContext.Provider>
        </ThemeContext.Provider>
        
    );
}