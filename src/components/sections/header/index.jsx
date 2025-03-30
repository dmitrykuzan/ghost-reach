import { Container, Logo, Menu } from "@components/ui";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper stack align-center justify-space-between">
          <Logo />
          <Menu />

          <button className="header__button">Join Now!</button>
        </div>
      </Container>
    </header>
  );
};
