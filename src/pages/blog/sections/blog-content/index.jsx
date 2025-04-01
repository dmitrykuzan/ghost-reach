import { Container, Typography } from "@components/ui";
import Image from "next/image";
import Link from "next/link";

export const BlogContent = () => {
  return (
    <section className="blog">
      <Container>
        <div className="blog__wrapper stack column">
          <div className="blog__text stack column">
            <Typography className="blog__title" tag="h1" center>
              GhostReach Blog
            </Typography>
            <Typography className="blog__subtitle p" tag="p">
              GhostReach can boost your SEO efforts by increasing the
              Click-Through Rate (CTR) of your organic SERP listings. But, of
              course, SEO is often more art than science. Check out some of the
              articles below to read more about the art and science of buying
              clicks to boost your organic SEO traffic
            </Typography>
          </div>

          <ul className="blog__list">
            <li className="blog__item">
              <div className="blog__item-image">
                <Link href="/blog/article">
                  <Image
                    src="/img/blog/demo.webp"
                    width="500"
                    height="500"
                    alt=" Ghost Reach vs. SerpClix"
                  />
                </Link>
              </div>
              <div className="blog__item-body stack column">
                <Typography className="blog__item-title" tag="h3">
                  <Link href="/blog/article">Ghost Reach vs. SerpClix</Link>
                </Typography>
                <span className="blog__item-date">April, 1 2025</span>
                <Typography className="blog__item-description p" tag="p">
                  Ghost Reach vs. SerpClix: The Real Difference in SERP Clicks
                  That Actually Rank
                </Typography>
                <Link className="blog__item-link" href="/blog/article">
                  Read more
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
