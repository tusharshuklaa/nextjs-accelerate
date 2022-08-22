import { FC } from 'react';
import { useThemeContext } from '../../hooks/use-theme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl">Theme Switcher</h2>
      <select
        aria-label="Theme Switcher"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className={`appearance-none form-select text-content bg-fill border border-edge px-4 py-2 font-normal w-72 rounded-lg border-highlight focus:border-base focus:outline-none ${
          className || ''
        }`}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="custom">Custom</option>
      </select>
    </div>
  );
};
