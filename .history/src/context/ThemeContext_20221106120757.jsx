import { createContext } from "react"

export const ThemeContext = createContext();

export default ThemeContextProvider = (props) => {
    state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }
    return (
        <ThemeContext.Provider value={state}>
            {props.children}
        </ThemeContext.Provider>
        
    );
}
export default ThemeContextProvider