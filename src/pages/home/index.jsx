import { Faq } from "@components/sections";
import {
  Banner,
  Features,
  Hero,
  HowWork,
  Info,
  Newsletter,
  Price,
  Testimonials,
} from "./sections";

export const Home = () => {
  return (
    <>
      <Hero />
      <HowWork />
      <Features />
      <Info />
      <Price />
      <Newsletter />
      <Banner />
      <Testimonials />
      <Faq />
    </>
  );
};
