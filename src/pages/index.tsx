import type { NextPage } from "next";
import Head from 'next/head';
import { Header } from "../components/header/header";
import { Welcome } from "../components/welcome";
import { SITE_TITLE } from "../utils/contants";
import { Container } from './../components/container';
import { IconContext } from "react-icons";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
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

      <IconContext.Provider value={{ color: "#0da5e9", style: { verticalAlign: 'middle' }}}>
        <Header />
        <Container className="py-2">
          <Welcome />
        </Container>
      </IconContext.Provider>
    </>
  );
};

export default LandingPage;
