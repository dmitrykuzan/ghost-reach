import Head from "next/head";
import { MainLayout } from "@layouts";

import { Terms } from "@pages";

const Page = () => {
  return (
    <>
      <Head>
        <title>GhostReach | Terms & Conditions</title>
        <meta name="description" content="description" />
      </Head>
      <Terms />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
