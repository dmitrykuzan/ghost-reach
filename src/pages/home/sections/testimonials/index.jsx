import { Container, Typography } from "@components/ui";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container>
        <div className="testimonials__wrapper stack column">
          <Typography className="h2" weight="500" tag="h2" center>
            Testimonials
          </Typography>

          <ul className="testimonials__list">
            <li className="testimonials__item stack column">
              <Typography
                className="testimonials__item-title"
                weight="400"
                tag="h3"
              >
                A Good Amount of Movement
              </Typography>

              <div className="testimonials__item-description">
                <Typography className="p" tag="p">
                  I've been using the free tier of the service for a week and a
                  half and have already seen a good amount of movement with our
                  GMB ranking. We were ranked 20-30 and have already moved up to
                  13-17 for our keywords. It was really easy to set up and
                  started running pretty quickly. I do recommend the service and
                  will most likely be upgrading to a paid tier in the near
                  future. The one thing I do wish the service offered was
                  hyper-local traffic or a way to plug in a 4g proxy. Currently
                  they only offer traffic localized to the state.
                </Typography>
              </div>

              <div className="testimonials__item-author stack align-center">
                <div className="testimonials__item-avatar">
                  <Image
                    src="/img/testimonials/avatar-1.png"
                    width="36"
                    height="36"
                    alt="Testimonials avatar"
                  />
                </div>
                <span className="testimonials__item-name">
                  C_Coffie @ B.H.W.
                </span>
              </div>
            </li>

            <li className="testimonials__item stack column">
              <Typography
                className="testimonials__item-title"
                weight="400"
                tag="h3"
              >
                20% In GSC
              </Typography>

              <div className="testimonials__item-description">
                <Typography className="p" tag="p">
                  I've been testing it for a month now and I can see an
                  improvement of about 20% in GSC. Thank you!
                </Typography>
              </div>

              <div className="testimonials__item-author stack align-center">
                <div className="testimonials__item-avatar">
                  <Image
                    src="/img/testimonials/avatar-2.png"
                    width="36"
                    height="36"
                    alt="Testimonials avatar"
                  />
                </div>
                <span className="testimonials__item-name">
                  The Fleoshkinator @ B.H.W.
                </span>
              </div>
            </li>

            <li className="testimonials__item stack column">
              <Typography
                className="testimonials__item-title"
                weight="400"
                tag="h3"
              >
                Highly Recommended
              </Typography>

              <div className="testimonials__item-description">
                <Typography className="p" tag="p">
                  Great UI and great staff. Very knowledgeable people and smooth
                  interface. After trying a few competitions I can say that this
                  one is HIGHLY recommended.
                </Typography>
              </div>

              <div className="testimonials__item-author stack align-center">
                <div className="testimonials__item-avatar">
                  <Image
                    src="/img/testimonials/avatar-3.png"
                    width="36"
                    height="36"
                    alt="Testimonials avatar"
                  />
                </div>
                <span className="testimonials__item-name">
                  Regileo @ B.H.W.
                </span>
              </div>
            </li>

            <li className="testimonials__item stack column">
              <Typography
                className="testimonials__item-title"
                weight="400"
                tag="h3"
              >
                From 38 to 9
              </Typography>

              <div className="testimonials__item-description">
                <Typography className="p" tag="p">
                  I've been using the free version over the last 3 weeks. Moved
                  3 keywords from position 38 to position 9. Just informational
                  articles, but still, the effect is visible. I might go for the
                  premium version!
                </Typography>
              </div>

              <div className="testimonials__item-author stack align-center">
                <div className="testimonials__item-avatar">
                  <Image
                    src="/img/testimonials/avatar-4.png"
                    width="36"
                    height="36"
                    alt="Testimonials avatar"
                  />
                </div>

                <span className="testimonials__item-name">
                  Alexion @ B.H.W.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
