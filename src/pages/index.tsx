import type { NextPage } from 'next';
import { Container } from '../components/container';
import { Header } from '../components/header/header';
import { ThemeSwitcher } from '../components/themeSwitcher';
import { Welcome } from '../components/welcome';

const LandingPage: NextPage = () => (
  <>
    <Header />

    <Container className="py-2">
      <Welcome />
    </Container>

    <ThemeSwitcher />
  </>
);

export default LandingPage;
