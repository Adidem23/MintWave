import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = (): void => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const contextValue: ThemeContextType = {
        isDarkMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
