import { createContext, useContext, useState, type ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type ThemeMode = "pink" | "blue";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>("pink");

  const toggleTheme = () => {
    setMode((prev) => (prev === "pink" ? "blue" : "pink"));
  };

  const pinkTheme = createTheme({
    palette: {
      primary: {
        main: "#f8bbd0",
      },
      secondary: {
        main: "#ec407a",
      },
      background: {
        default: "#fce4ec",
      },
      text: {
        primary: "#880e4fff",
        secondary: "#ad1457ff",
      },
      error: {
        main: "#e91e63ff",
      },
      success: {
        main: "#4caf50",
      },
      divider: "#f06292ff",
    },
    
    
  });

  const blueTheme = createTheme({
    palette: {
      primary: {
        main: "#bcdbf5",
      },
      secondary: {
        main: "#447199",
      },
      background: {
        default: "#bcdbf5",
      },
      text: {
        primary: "#274c77ff",
        secondary: "#355f88ff",
      },
      error: {
        main: "#f44336",
      },
      success: {
        main: "#4caf50",
      },
      divider: "#5284a9ff",
    },
    
  });

  const theme = mode === "pink" ? pinkTheme : blueTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
