import { Container, Logo, Menu, Typography } from "@components/ui";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper stack column">
          <div className="footer__top stack justify-space-between">
            <div className="footer__navigation stack column justify-space-between">
              <Logo />

              <Menu className="footer__menu" />
            </div>

            <form className="footer__form stack column">
              <div className="footer__form-input">
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="footer__form-bottom stack align-center justify-space-between">
                <Typography tag="p">
                  Sign up for our newsletter and join the GhostReach.
                </Typography>

                <button className="footer__form-submit">Sign up</button>
              </div>
            </form>
          </div>

          <div className="footer__bottom stack align-center">
            <ul className="footer__policy stack align-center">
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>

            <Typography className="footer__copy">
              Copyright © 2023 SEO Rank Hunter. All rights reserved. Contact us
              at contact@seorankhunter.com
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};
