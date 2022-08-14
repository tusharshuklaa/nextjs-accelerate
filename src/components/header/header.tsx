import { Container } from "../container";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className="py-2 bg-transparent border-solid border-b border-sky-500">
      <Container>
        <Logo />
        {/* Nav */}
      </Container>
    </header>
  );
};