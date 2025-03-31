import { useState } from "react";
import { Container, Typography } from "@components/ui";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Переключаем активный элемент
  };

  return (
    <section className="faq">
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
                  Lorem ipsum dolor sit amet?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  perferendis maxime quas.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam recusandae magni cumque similique expedita labore sed
                  laborum.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam recusandae magni cumque similique expedita labore sed
                  laborum.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam recusandae magni cumque similique expedita labore sed
                  laborum.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam recusandae magni cumque similique expedita labore sed
                  laborum.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              <div className="faq__item-body">
                <Typography className="p" tag="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam recusandae magni cumque similique expedita labore sed
                  laborum.
                </Typography>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
