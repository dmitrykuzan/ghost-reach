import { TypeAnimation } from "react-type-animation";
import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const Hero = () => {
  const t = useTranslation();

  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper stack column">
          <div className="hero__text-wrapper stack column">
            <div className="hero__type-wrapper">
              <TypeAnimation
                sequence={[
                  "Stealthy SERP Clicks - Real Behavior",
                  1000,
                  "Stealthy SERP Clicks - Real Results",
                  1000,
                  "Stealthy SERP Clicks - Real Impact",
                  1000,
                  "Stealthy SERP Clicks - Real Signals",
                  1000,
                  "Stealthy SERP Clicks - Real Traffic",
                  1000,
                  "Stealthy SERP Clicks - Real SEO Power",
                  1000,
                ]}
                className="hero__type"
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <div className="hero__text stack column">
              <Typography
                className="hero__title h1"
                tag="h1"
                weight="700"
                center
              >
                Ghost Reach
              </Typography>
              <div className="hero__bottom-text stack column">
                <Typography
                  className="hero__subtitle"
                  tag="h2"
                  weight="500"
                  center
                >
                  Stealthy Emulated SERP Clicks for Ranking Boost
                </Typography>

                <Typography className="hero__description" tag="p" center>
                  Ghost Reach is a SEO service that quietly amplifies your
                  search rankings using simulated human search behavior. It
                  delivers organic-looking clicks and engagement signals without
                  drawing unwanted attention. Designed for seasoned SEO
                  enthusiasts, Ghost Reach provides the invisible push your site
                  needs to climb the Google/Bong SERPs (Search Engine Results
                  Pages).
                </Typography>
              </div>
            </div>
          </div>

          <button className="hero__button button">Start For Free</button>
        </div>
      </Container>
    </section>
  );
};
