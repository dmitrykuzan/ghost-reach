import { Container, Typography } from "@components/ui";

export const Price = () => {
  return (
    <section className="price">
      <Container>
        <div className="price__wrapper stack column">
          <Typography tag="h2" center>
            Pricing Packages
          </Typography>

          <div className="price__table">
            <table>
              <thead>
                <tr>
                  <th>Daily Clicks:</th>
                  <th>Price (per month): </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>200 clicks/day</td>
                  <td>$650/month</td>
                </tr>
                <tr>
                  <td>400 clicks/day </td>
                  <td>$1050/month </td>
                </tr>
                <tr>
                  <td>600 clicks/day </td>
                  <td>$1500/month </td>
                </tr>
                <tr>
                  <td>800 clicks/day </td>
                  <td>$1900/month </td>
                </tr>
                <tr>
                  <td>1000 clicks/day </td>
                  <td>$2300/month </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};
