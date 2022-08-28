import { useTheme } from 'next-themes';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { ComponentWithClassname } from '../../models';
import { ThemeOptions } from '../../utils/contants';

type ThemeInfo = { name: string; value: ThemeOptions };
const THEMES: Array<ThemeInfo> = Object.values(ThemeOptions).map((t) => {
  const themeName =
    t === ThemeOptions.SYSTEM
      ? 'Auto'
      : `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
  return {
    name: themeName,
    value: t,
  };
});

export const ThemeSwitcher: FC<ComponentWithClassname> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (e: ChangeEvent) => {
    const val = (e.target as HTMLInputElement).value as ThemeOptions;
    setTheme(val);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>Loading</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl">Theme Switcher</h2>
      <select
        aria-label="Theme Switcher"
        value={theme}
        onChange={handleThemeChange}
        className={`appearance-none form-select text-content bg-fill border border-edge px-4 py-2 font-normal w-72 rounded-lg border-highlight focus:border-base focus:outline-none ${
          className || ''
        }`}
      >
        {THEMES.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
