import Head from "next/head";

// Layouts
import { MainLayout } from "@layouts";
import { Blog } from "@pages/blog";

// Pages

const Page = () => {
  return (
    <>
      <Head>
        <title>GhostReach | Blog</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <link rel="icon" href="/img/ui/favicon.svg" />
      </Head>
      <Blog />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
