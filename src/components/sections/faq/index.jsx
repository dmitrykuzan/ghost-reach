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
          <Typography tag="h2" center>
            Frequently Asked Questions
          </Typography>

          <ul className="faq__list stack column">
            <li className={`faq__item ${activeIndex === 0 ? "active" : ""}`}>
              <div className="faq__item-title" onClick={() => handleClick(0)}>
                <Typography tag="h3">Lorem ipsum dolor sit amet?</Typography>
              </div>
              {activeIndex === 0 && (
                <div className="faq__item-body">
                  <Typography tag="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga perferendis maxime quas.
                  </Typography>
                </div>
              )}
            </li>

            <li className={`faq__item ${activeIndex === 1 ? "active" : ""}`}>
              <div className="faq__item-title" onClick={() => handleClick(1)}>
                <Typography tag="h3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              {activeIndex === 1 && (
                <div className="faq__item-body">
                  <Typography tag="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam recusandae magni cumque similique expedita labore
                    sed laborum.
                  </Typography>
                </div>
              )}
            </li>

            <li className={`faq__item ${activeIndex === 2 ? "active" : ""}`}>
              <div className="faq__item-title" onClick={() => handleClick(2)}>
                <Typography tag="h3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              {activeIndex === 2 && (
                <div className="faq__item-body">
                  <Typography tag="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam recusandae magni cumque similique expedita labore
                    sed laborum.
                  </Typography>
                </div>
              )}
            </li>

            <li className={`faq__item ${activeIndex === 3 ? "active" : ""}`}>
              <div className="faq__item-title" onClick={() => handleClick(3)}>
                <Typography tag="h3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              {activeIndex === 3 && (
                <div className="faq__item-body">
                  <Typography tag="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam recusandae magni cumque similique expedita labore
                    sed laborum.
                  </Typography>
                </div>
              )}
            </li>

            <li className={`faq__item ${activeIndex === 4 ? "active" : ""}`}>
              <div className="faq__item-title" onClick={() => handleClick(4)}>
                <Typography tag="h3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              {activeIndex === 4 && (
                <div className="faq__item-body">
                  <Typography tag="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam recusandae magni cumque similique expedita labore
                    sed laborum.
                  </Typography>
                </div>
              )}
            </li>

            <li className={`faq__item ${activeIndex === 5 ? "active" : ""}`}>
              <div className="faq__item-title" onClick={() => handleClick(5)}>
                <Typography tag="h3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing?
                </Typography>
              </div>
              {activeIndex === 5 && (
                <div className="faq__item-body">
                  <Typography tag="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam recusandae magni cumque similique expedita labore
                    sed laborum.
                  </Typography>
                </div>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
