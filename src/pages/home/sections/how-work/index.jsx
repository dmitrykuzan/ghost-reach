import { Container, Typography } from "@components/ui";

export const HowWork = () => {
  return (
    <section className="howwork">
      <Container>
        <div className="howwork__wrapper stack justify-space-between">
          <div className="howwork__text stack column">
            <Typography tag="h2">How It Works ?</Typography>
            <Typography tag="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, in eos expedita sint fugit molestias quibusdam
              laudantium placeat nobis veniam.
            </Typography>
          </div>

          <ul className="howwork__list stack column">
            <li className="howwork__item stack column">
              <Typography tag="h3" className="howwork__item-title">
                Input Your Target Signals
              </Typography>
              <Typography tag="p" className="howwork__item-description">
                You provide a custom list of websites related to your target
                keyword and your own site. These could be competitor pages,
                industry blogs, or any URLs that a real user might browse before
                finding your site.
              </Typography>
            </li>

            <li className="howwork__item stack column">
              <Typography tag="h3" className="howwork__item-title">
                Warm-Up Phase
              </Typography>
              <Typography tag="p" className="howwork__item-description">
                We deploys aged browser profiles to visit those provided sites.
                Each browser profile farms history and cookies, so it behaves
                like a seasoned user. By browsing the related links first, the
                system warms up the session – establishing a realistic user
                journey and behavioral context.
              </Typography>
            </li>

            <li className="howwork__item stack column">
              <Typography tag="h3" className="howwork__item-title">
                Emulated Search & Click
              </Typography>
              <Typography tag="p" className="howwork__item-description">
                Next, the system conducts a genuine-looking search on Google or
                Bing for your target keyword. It scrolls through results just
                like a human would, finds your listing, and clicks through to
                your website. The simulated user may dwell on your page, scroll,
                and even navigate internally to mimic real engagement.
              </Typography>
            </li>

            <li className="howwork__item stack column">
              <Typography tag="h3" className="howwork__item-title">
                Sustained Ranking Signals
              </Typography>
              <Typography tag="p" className="howwork__item-description">
                The outcome is a stream of geo-targeted, persistent behavioral
                signals (high click-through rates, longer time-on-site, low
                bounce rates) pointing to your site. These signals accumulate
                day after day, nudging your rankings upward in a way that
                appears entirely organic. In short, Ghost Reach generates the
                kind of user interaction metrics that search engines love to
                reward – all under the radar.
              </Typography>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
