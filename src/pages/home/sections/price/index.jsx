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
