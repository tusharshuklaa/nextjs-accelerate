import { Container } from '../container';
import { Logo } from '../logo';

export const Header = () => (
  <header className="py-2 bg-transparent border-solid border-b border-highlight">
    <Container>
      <Logo />
      {/* Nav */}
    </Container>
  </header>
);
