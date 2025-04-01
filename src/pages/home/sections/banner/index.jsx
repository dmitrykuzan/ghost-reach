import { Container, Typography } from "@components/ui";

export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <div className="banner__wrapper stack justify-space-between align-center">
          <Typography className="banner__title" weight="500" tag="h2">
            Ready to rank higher?
          </Typography>
          <a href="#price" className="banner__button">
            Start For Free
          </a>
        </div>
      </Container>
    </section>
  );
};
