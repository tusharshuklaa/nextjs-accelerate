import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

const THEME_CONTEXT_DEFAULT = {
  theme: 'hello',
  setTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(THEME_CONTEXT_DEFAULT);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext used outside ThemeContext provider');
  }

  useEffect(() => {
    document.body.classList.value =
      'transition-colors ease-in-out duration-200';
    document.body.classList.add(`theme-${context.theme}`);
  }, [context.theme]);

  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
