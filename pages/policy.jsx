import Head from "next/head";
import { MainLayout } from "@layouts";
import { Policy } from "@pages";

const Page = () => {
  return (
    <>
      <Head>
        <title>GhostReach | Privacy Policy</title>
        <meta name="description" content="description" />
      </Head>
      <Policy />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
