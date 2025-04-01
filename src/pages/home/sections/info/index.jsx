import { Container, Typography } from "@components/ui";
import Image from "next/image";

export const Info = () => {
  return (
    <section className="info">
      <Container>
        {/* <Image
          src="/img/ui/dalle.png"
          width="750"
          height="175"
          alt="Signal SEO"
        /> */}

        <div className="info__wrapper stack column">
          <div className="info__item stack column">
            <Typography
              tag="h2"
              className="info__item-title h2"
              weight="400"
              center
            >
              Your Site Gets Even More Signals!
            </Typography>
            <div className="info__item-image">
              <Image
                src="/img/info/signal.png"
                width="750"
                height="175"
                alt="Signal SEO"
              />
            </div>

            <div className="info__item-image">
              <Image
                src="/img/info/logs.png"
                width="750"
                height="175"
                alt="Signal SEO"
              />
            </div>
          </div>

          <div className="info__item stack column">
            <Typography
              tag="h2"
              className="info__item-title h2"
              weight="400"
              center
            >
              Before & After Comparison GSC
            </Typography>
            <div className="info__item-image">
              <Image
                src="/img/info/traffic-1.jpg"
                width="1290"
                height="590"
                alt="Signal SEO"
              />
            </div>

            <div className="info__item-image">
              <Image
                src="/img/info/traffic-2.jpg"
                width="1290"
                height="590"
                alt="Signal SEO"
              />
            </div>
          </div>

          <div className="info__item stack column">
            <Typography
              tag="h2"
              className="info__item-title h2"
              weight="400"
              center
            >
              Before & After Comparison GMB
            </Typography>
            <div className="info__item-image">
              <Image
                src="/img/info/before.png"
                width="1290"
                height="590"
                alt="Signal SEO"
              />
            </div>

            <div className="info__item-image">
              <Image
                src="/img/info/after.png"
                width="1290"
                height="590"
                alt="Signal SEO"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
