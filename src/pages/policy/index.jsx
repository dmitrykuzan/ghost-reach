import { Container, Typography } from "@components/ui";

export const Policy = () => {
  return (
    <section className="policy">
      <Container>
        <div className="policy__wrapper stack column">
          <div className="policy__top stack column">
            <Typography tag="h1" variant="h1" color="dark" weight="600" center>
              Privacy Policy
            </Typography>
            <Typography tag="p" variant="p" center>
              Your privacy is important to us at GhostReach. We respect your
              privacy regarding any information we may collect from you across
              our website.
            </Typography>
          </div>

          <div className="policy__body stack column">
            <div className="policy__text stack column">
              <Typography tag="p" variant="p">
                Privacy Policy Your privacy is important to us at GhostReach. We
                are committed to protecting your personal information and your
                right to privacy. This Privacy Policy explains what information
                we collect, how we use it, and what rights you have concerning
                your data.
              </Typography>
            </div>

            <div className="policy__text stack column">
              <Typography tag="h2" variant="h2" color="dark" weight="600">
                What information do we collect?
              </Typography>
              <Typography tag="p" variant="p">
                We collect personal information that you voluntarily provide to
                us when you register on our website, express interest in
                obtaining information about us or our products, participate in
                activities on the website, or contact us. This information may
                include your name, email address, and any other details you
                choose to provide.
              </Typography>
              <Typography tag="p" variant="p">
                We also automatically collect certain information when you visit
                our website, such as your IP address, browser type, and pages
                visited. This data helps us improve our website and enhance user
                experience.
              </Typography>
            </div>

            <div className="policy__text stack column">
              <Typography tag="h2" variant="h2" color="dark" weight="600">
                How do we use your information?
              </Typography>
              <Typography tag="p" variant="p">
                We use the information we collect to:
              </Typography>
              <ul className="policy__list stack column">
                <li className="policy__item">
                  <Typography tag="p" variant="p">
                    Provide, operate, and maintain our website.
                  </Typography>
                </li>
                <li className="policy__item">
                  <Typography tag="p" variant="p">
                    Improve and personalize user experience.
                  </Typography>
                </li>
                <li className="policy__item">
                  <Typography tag="p" variant="p">
                    Respond to inquiries, provide support, and send updates.
                  </Typography>
                </li>
                <li className="policy__item">
                  <Typography tag="p" variant="p">
                    Analyze website usage to improve functionality.
                  </Typography>
                </li>
                <li className="policy__item">
                  <Typography tag="p" variant="p">
                    Ensure security and prevent fraudulent activities.
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="policy__text stack column">
              <Typography tag="h2" variant="h2" color="dark" weight="600">
                Do we use cookies and other tracking technologies?
              </Typography>
              <Typography tag="p" variant="p">
                Yes, we use cookies and similar tracking technologies to collect
                and store information. Cookies help us understand how users
                interact with our website and enable us to enhance your browsing
                experience. You can control cookie preferences through your
                browser settings.
              </Typography>
            </div>

            <div className="policy__text stack column">
              <Typography tag="h2" variant="h2" color="dark" weight="600">
                How long do we keep your information?
              </Typography>
              <Typography tag="p" variant="p">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy unless a
                longer retention period is required by law. Once the data is no
                longer needed, we securely delete or anonymize it.
              </Typography>
            </div>

            <div className="policy__text stack column">
              <Typography tag="h2" variant="h2" color="dark" weight="600">
                How do we keep your information safe?
              </Typography>
              <Typography tag="p" variant="p">
                We implement security measures to protect your personal
                information from unauthorized access, alteration, or disclosure.
                However, no method of transmission over the internet is
                completely secure, and we cannot guarantee absolute security.
              </Typography>
            </div>

            <div className="policy__text stack column">
              <Typography tag="h2" variant="h2" color="dark" weight="600">
                What are your privacy rights?
              </Typography>
              <Typography tag="p" variant="p">
                Depending on your location, you may have rights regarding your
                personal information, including:
              </Typography>
              <ul className="policy__list stack column">
                <li className="policy__item">
                  <Typography tag="p" variant="p">
                    The right to access, update, or delete your data.
                  </Typography>
                </li>
                <li className="policy__item">
                  <Typography tag="p" variant="p">
                    The right to object to processing or restrict how we use
                    your data.
                  </Typography>
                </li>
                <li className="policy__item">
                  <Typography tag="p" variant="p">
                    The right to withdraw consent where applicable.
                  </Typography>
                </li>
              </ul>
              <Typography tag="p" variant="p">
                If you wish to exercise any of these rights, please contact us.
              </Typography>
            </div>

            <div className="policy__text stack column">
              <Typography tag="h2" variant="h2" color="dark" weight="600">
                How can you contact us about this policy?
              </Typography>
              <Typography tag="p" variant="p">
                If you have any questions or concerns regarding this Privacy
                Policy, you can reach out to us at:
              </Typography>
              <Typography tag="p" variant="p">
                We reserve the right to update this Privacy Policy as necessary
                to reflect changes in our practices. Any modifications will be
                posted on this page.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
