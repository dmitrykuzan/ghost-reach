import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const Hero = () => {
  const t = useTranslation();

  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper stack column">
          <div className="hero__text stack column">
            <Typography tag="h1" center>
              <span>Ghost Reach</span> <br></br> Stealthy Emulated SERP Clicks
              for Ranking Boost
            </Typography>

            <Typography tag="p" center>
              Ghost Reach is a SEO service that quietly amplifies your search
              rankings using simulated human search behavior. It delivers
              organic-looking clicks and engagement signals without drawing
              unwanted attention. Designed for seasoned SEO enthusiasts, Ghost
              Reach provides the invisible push your site needs to climb the
              Google/Bong SERPs (Search Engine Results Pages).
            </Typography>
          </div>

          <button className="hero__button">Start For Free</button>
        </div>
      </Container>
    </section>
  );
};
