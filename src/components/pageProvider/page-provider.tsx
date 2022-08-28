import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { FC, useMemo } from 'react';
import { IconContext } from 'react-icons';
import { CustomThemeProvider } from '../../contexts';
import { ComponentWithChildren } from '../../models';
import { SITE_TITLE } from '../../utils/contants';

export const PageProvider: FC<ComponentWithChildren> = ({ children }) => {
  const iconStyles = useMemo(
    () => ({
      style: { verticalAlign: 'middle' },
    }),
    []
  );

  return (
    <ThemeProvider defaultTheme="system">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            SITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{SITE_TITLE}</title>
      </Head>

      <IconContext.Provider value={iconStyles}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </IconContext.Provider>
    </ThemeProvider>
  );
};
