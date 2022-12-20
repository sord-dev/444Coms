import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Benefits, Hero, OfferSection } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>444Coms - Simple Conference Calls.</title>
        <meta
          name="description"
          content="Fast, reliable & simple conference calls from all around the world."
        />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://444comms.vercel.app/" />
        <meta
          property="og:title"
          content="444Coms - Simple Conference Calls."
        />
        <meta
          property="og:description"
          content="Fast, reliable & simple conference calls from all around the world."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://444comms.vercel.app/" />
        <meta
          property="twitter:title"
          content="444Coms - Simple Conference Calls."
        />
        <meta
          property="twitter:description"
          content="Fast, reliable & simple conference calls from all around the world."
        />
        <meta property="twitter:image" content="" />
      </Head>

      <Hero />
      <Benefits />
      <OfferSection />
    </div>
  );
}
