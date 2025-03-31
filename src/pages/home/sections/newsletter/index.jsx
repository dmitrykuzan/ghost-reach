import { Container, Typography } from "@components/ui";

export const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <div className="newsletter__wrapper stack column">
          <div className="newsletter__text stack column">
            <Typography className="newsletter__title" tag="h2" center>
              Let's rank your website higher!
            </Typography>
            <Typography className="newsletter__subtitle p" tag="p" center>
              Signup to our newsletter and get access to all the latest news in
              the industry, plus how we compare to others and 20% off the first
              month!
            </Typography>
          </div>

          <form className="newsletter__form stack align-center">
            <div className="newsletter__form-input">
              <input placeholder="Your email" type="text" />
            </div>
            <button className="newsletter__form-button button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};
