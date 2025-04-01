import { useEffect, useState } from "react";
import { Container, Typography } from "@components/ui";

const pricingTable = {
  200: 650,
  400: 1050,
  600: 1500,
  800: 1900,
  1000: 2300,
};

const min = 200;
const max = 1000;

export const Price = () => {
  // //range

  const [value, setValue] = useState(200);
  const [price, setPrice] = useState(pricingTable[200]);

  const handleSliderChange = (event) => {
    const newValue = Number(event.target.value);

    setValue(newValue);
  };

  useEffect(() => {
    setPrice(pricingTable[value]);
  }, [value]);

  const fillWidth = ((value - min) / (max - min)) * 100;

  return (
    <section className="price" id="price">
      <div className="price__decor">
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
        <div className="price__wrapper stack column">
          <div className="price__text stack column">
            <Typography
              className="price__title h2"
              weight="500"
              tag="h2"
              center
            >
              Pricing
            </Typography>

            <Typography className="price__subtitle" tag="p" center>
              Select a plan from the slider below. The free plan is free
              forever, no card needed.
            </Typography>
          </div>

          <div className="price__track">
            <span
              className="price__track-fill"
              style={{ width: `${Math.min(fillWidth, 100)}%` }}
            ></span>
            <input
              type="range"
              min={min}
              max={max}
              value={value}
              step={200}
              onChange={handleSliderChange}
              className="price__track-input"
            />
          </div>

          <div className="price__card stack column center">
            <Typography className="price__card-title" weight="400" tag="h3">
              Need 5,000+ clicks/day? Custom enterprise pricing available.
            </Typography>
            <div className="price__card-value stack align-center">
              <span className="currency">Daily Clicks:</span>
              <span className="price-value">{value}</span>
            </div>

            <ul className="price__card-list stack column">
              <li className="price__card-item">
                <span>✓</span>
                At least 5 minutes spent on your site
              </li>
              <li className="price__card-item">
                <span>✓</span> Country-level GEO targeting
              </li>
              <li className="price__card-item">
                <span>✓</span> Promote Google Search, Google My Business, Bing
                Search, Bing Places for Business, Youtube video search, Etsy and
                Direct URL
              </li>
            </ul>
            <div className="price__card-value stack align-center">
              <span className="price-value">$</span>
              <span className="price-value">{price}</span>
              <span className="month">/month</span>
            </div>

            <button className="button">Get started</button>
          </div>
        </div>
      </Container>
    </section>
  );
};
