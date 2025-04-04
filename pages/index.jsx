import Head from "next/head";
import { MainLayout } from "@layouts";
import { Home } from "@pages/home";

const Page = () => {
  return (
    <>
      <Head>
        <title>GhostReach | Stealth SERP Clicks</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/img/ui/favicon.svg" />
      </Head>
      <Home />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
