import { useState, useEffect } from "react";
import { Burger, BurgerMenu, Container, Logo, Menu } from "@components/ui";

export const Header = () => {
  //** Sticky header
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //**Menu burger state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <header className={`header ${isScrolled ? "active" : ""}`}>
        <Container>
          <div className="header__wrapper stack align-center justify-space-between">
            <Logo />
            <Menu className="header__menu" />

            <a href="#price" className="header__button button">
              Join Now!
            </a>
            <Burger openMenu={openMenu} isMenuOpen={isMenuOpen} />
          </div>
        </Container>
      </header>
    </>
  );
};
