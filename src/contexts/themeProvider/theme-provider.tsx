import { useTheme } from 'next-themes';
import { createContext, FC, useEffect, useState } from 'react';
import { ComponentWithChildren } from '../../models';
import { ThemeOptions } from '../../utils/contants';

interface IThemeContext {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: ThemeOptions.LIGHT,
  setTheme: () => {},
});
ThemeContext.displayName = 'ThemeContext';

const CustomThemeProvider: FC<ComponentWithChildren> = ({ children }) => {
  const { resolvedTheme, theme } = useTheme();
  // Setting 'light' theme as default
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(
    ThemeOptions.LIGHT
  );

  useEffect(() => {
    // If user has system preference set to dark theme, set current theme to 'dark'
    if (resolvedTheme === 'dark') {
      setCurrentTheme(ThemeOptions.DARK);
    } else {
      setCurrentTheme(theme as ThemeOptions);
    }
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, CustomThemeProvider };
