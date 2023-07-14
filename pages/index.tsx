import Head from "next/head";
import { SITE_TITLE } from "../lib/constants";

export default function Index() {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      {SITE_TITLE}
    </>
  );
}
