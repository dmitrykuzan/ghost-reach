import { Faq } from "@components/sections";
import { Banner, Features, Hero, HowWork, Newsletter, Price } from "./sections";

export const Home = () => {
  return (
    <>
      <Hero />
      <HowWork />
      <Features />
      <Price />
      <Newsletter />
      <Banner />
      <Faq />
    </>
  );
};
