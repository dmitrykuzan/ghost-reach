import { useState } from "react";
import { Container, Typography } from "@components/ui";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Переключаем активный элемент
  };

  return (
    <section className="faq" id="faq">
      <Container>
        <div className="faq__wrapper stack column">
          <Typography className="h2" weight="500" tag="h2" center>
            Frequently Asked Questions
          </Typography>

          <ul className="faq__list stack column">
            <li
              className={`faq__item stack column ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(0)}>
                <Typography weight="400" tag="h3">
                  Is Ghost Reach safe to use?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Yes. Ghost Reach uses aged browser profiles, real user
                  behavior emulation, and unblacklisted mobile IPs. Our system
                  mimics natural human behavior across the web, making it
                  extremely stealthy and low-risk. While all ranking
                  manipulation is technically against guidelines, our methods
                  are undetectable and behavior-based—not spammy.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(1)}>
                <Typography weight="500" tag="h3">
                  Will this actually improve my Google rankings?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Yes. Ghost Reach is built to deliver the kind of user
                  engagement signals Google rewards—high CTR, longer dwell time,
                  and low bounce. When your site receives consistent behavioral
                  signals that match searcher intent, rankings naturally
                  improve. We’ve seen clients jump several positions for
                  competitive keywords within weeks.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(2)}>
                <Typography weight="500" tag="h3">
                  Can this help with new pages or recently indexed content?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Definitely. Ghost Reach is perfect for boosting fresh
                  content—especially blog posts, new landing pages, or product
                  drops. By injecting immediate engagement, we help Google
                  understand that your page is relevant, which accelerates
                  indexing and early SERP lift.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 3 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(3)}>
                <Typography weight="500" tag="h3">
                  Does this method actually work?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  100%. Behavioral signals like CTR, dwell time, and engagement
                  have been proven to impact rankings. This is backed by the
                  2024 Google algorithm leak and confirmed by top sources like
                  Moz, Backlinko, and Neil Patel. Ghost Reach is built around
                  those exact signals.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 4 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(4)}>
                <Typography weight="500" tag="h3">
                  How long until I see results?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Most campaigns begin to show ranking movement within 2–4
                  weeks. For long-tail keyword strategies and consistent traffic
                  simulation, you’ll typically see compounding gains over 60–90
                  days.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 5 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(5)}>
                <Typography weight="500" tag="h3">
                  What if my site is already ranking?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Ghost Reach can be used to reinforce and defend rankings,
                  especially in competitive niches. By maintaining strong
                  engagement metrics, you reduce the risk of slipping due to
                  inactivity or competitor pressure.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 6 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(6)}>
                <Typography weight="500" tag="h3">
                  Can I configure the bounce rate or session behavior?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Yes. You can fully customize time-on-site, pages visited,
                  scroll depth, click paths, browser language, and more. Our
                  campaign manager gives you granular control.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 7 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(7)}>
                <Typography weight="500" tag="h3">
                  Can you load video pages or multimedia content?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Yes, we support YouTube embeds, video landing pages, and other
                  content-heavy URLs. Ghost Reach loads and interacts with them
                  like a real user.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 8 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(8)}>
                <Typography weight="500" tag="h3">
                  Is there a contract or minimum term?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  No. All plans are month-to-month. Subscribe, scale up, or
                  cancel anytime.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 9 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(9)}>
                <Typography weight="500" tag="h3">
                  Do you provide support?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Yes. We offer best-effort support via Telegram and provide
                  full documentation for setting up and optimizing your
                  campaigns.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 10 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(10)}>
                <Typography weight="500" tag="h3">
                  How does campaign setup and management work?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  After purchasing a package, you’ll be connected with a
                  Telegram rep from our team who will assist you directly with
                  setting up your campaign. You’ll tell them your goals, target
                  keywords, and any preferences, and they’ll help configure
                  everything to maximize results. It’s a simple, hands-on
                  process—no dashboard learning curve required.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 11 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(11)}>
                <Typography weight="500" tag="h3">
                  Can I choose the location of my traffic?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Yes. Ghost Reach lets you fully control geo-targeting. You can
                  select traffic by country, region, or even specific city.
                  Whether you need clicks from New York, Berlin, or Dubai—we can
                  simulate real users from those exact locations using clean,
                  unblacklisted mobile IPs.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 12 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(12)}>
                <Typography weight="500" tag="h3">
                  What about browser language or international traffic?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  We support multi-language emulation, which means Ghost Reach
                  can operate across any market—English, German, Spanish,
                  Japanese, etc. You can configure the browser language and
                  location to reflect real local users from the regions you’re
                  targeting.
                </Typography>
              </div>
            </li>

            <li
              className={`faq__item stack column ${
                activeIndex === 13 ? "active" : ""
              }`}
            >
              <div className="faq__item-title" onClick={() => handleClick(13)}>
                <Typography weight="500" tag="h3">
                  Will Ghost Reach traffic appear in analytics?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Yes. Traffic appears in analytics as organic search traffic,
                  with proper referrers and natural user agents. There are no
                  obvious fingerprints, no referrer spam, and no “bot” traffic
                  flags.
                </Typography>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
