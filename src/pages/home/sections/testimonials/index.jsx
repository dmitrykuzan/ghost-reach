import { Container, Typography } from "@components/ui";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__decor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1140"
          height="1124"
          viewBox="0 0 1140 1124"
          fill="none"
        >
          <path
            d="M1106.07 213.92L1094.41 207.114L1106.07 213.92ZM705.168 1118.71L717.877 1123.26L726.986 1097.85L714.277 1093.29L705.168 1118.71ZM5.17509 87.841C221.491 52.5272 535.94 19.5471 776.079 29.2037C896.645 34.052 996.264 49.6024 1055.56 79.5271C1085.05 94.41 1102.56 111.842 1109.26 131.342C1115.84 150.531 1113.08 175.123 1094.41 207.114L1117.73 220.727C1138.73 184.741 1144.82 151.782 1134.79 122.578C1124.88 93.6856 1100.34 71.8837 1067.72 55.423C1002.81 22.6605 898.019 7.08539 777.164 2.2255C534.458 -7.53427 218.005 25.7389 0.824905 61.1938L5.17509 87.841ZM1094.41 207.114C1045.38 291.104 975.443 381.115 902.755 471.325C830.342 561.196 755.113 651.354 696.675 734.589C638.58 817.332 595.129 895.821 588.825 962.431C585.615 996.343 591.964 1027.82 611.341 1054.95C630.567 1081.87 661.609 1103.1 705.168 1118.71L714.277 1093.29C673.994 1078.85 648.34 1060.29 633.313 1039.25C618.439 1018.43 612.979 993.776 615.705 964.975C621.271 906.16 660.662 832.869 718.772 750.103C776.538 667.827 850.876 578.745 923.78 488.266C996.41 398.126 1067.55 306.68 1117.73 220.727L1094.41 207.114Z"
            fill="#4f2d9f"
          />
        </svg>
      </div>
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
