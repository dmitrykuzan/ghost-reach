import { Container, Typography } from "@components/ui";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const HowWork = () => {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    fetch("/animation/transparent.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Ошибка загрузки Lottie:", err));
  }, []);
  return (
    <section className="howwork" id="howwork">
      <Container>
        <div className="howwork__wrapper stack column">
          <div className="howwork__body stack justify-space-between">
            <div className="howwork__content stack column">
              <div className="howwork__text stack column">
                <Typography className="h2" weight="500" tag="h2">
                  How It Works ?
                </Typography>
                <Typography tag="p" className="p">
                  Boost your Google/Bing rankings with behavioral traffic that
                  looks real—because it is. Aged profiles. Contextual warm-up.
                  Humanlike clicks. Built for SEO enthusiasts.
                </Typography>
              </div>
              <Lottie animationData={animationData} loop={true} />
            </div>

            <ul className="howwork__list stack column">
              <li className="howwork__item stack column">
                <Typography
                  tag="h3"
                  weight="500"
                  className="howwork__item-title"
                >
                  <span>01</span> · Input Your Target Signals
                </Typography>
                <Typography tag="p" className="howwork__item-description p">
                  You provide a custom list of websites related to your target
                  keyword and your own site. These could be competitor pages,
                  industry blogs, or any URLs that a real user might browse
                  before finding your site.
                </Typography>
              </li>

              <li className="howwork__item stack column">
                <Typography
                  tag="h3"
                  weight="500"
                  className="howwork__item-title"
                >
                  <span>02</span> · Warm-Up Phase
                </Typography>
                <Typography tag="p" className="howwork__item-description p">
                  We deploys aged browser profiles to visit those provided
                  sites. Each browser profile farms history and cookies, so it
                  behaves like a seasoned user. By browsing the related links
                  first, the system warms up the session – establishing a
                  realistic user journey and behavioral context.
                </Typography>
              </li>

              <li className="howwork__item stack column">
                <Typography
                  tag="h3"
                  weight="500"
                  className="howwork__item-title"
                >
                  <span>03</span> · Emulated Search & Click
                </Typography>
                <Typography tag="p" className="howwork__item-description p">
                  Next, the system conducts a genuine-looking search on Google
                  or Bing for your target keyword. It scrolls through results
                  just like a human would, finds your listing, and clicks
                  through to your website. The simulated user may dwell on your
                  page, scroll, and even navigate internally to mimic real
                  engagement.
                </Typography>
              </li>

              <li className="howwork__item stack column">
                <Typography
                  tag="h3"
                  weight="500"
                  className="howwork__item-title"
                >
                  <span>04</span> · Sustained Ranking Signals
                </Typography>
                <Typography tag="p" className="howwork__item-description p">
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

          <Link className="button howwork__button" href="#price">
            See packages
          </Link>
        </div>
      </Container>
    </section>
  );
};
