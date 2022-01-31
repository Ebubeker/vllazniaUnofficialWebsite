import Head from "next/head";
import { useEffect, useState } from "react";
import {
  FullScreenNextMatch,
  OurPartners,
  BackSection,
  NewsHighlight,
  GamesGadget,
  VllazniaTv,
  NewsAndSocial,
  TableGadget,
  ShopGadget,
  Footer,
} from "../components";
import {
  getMatches,
  getGallery,
  getNews,
  getProducts,
  getVideos,
} from "../pages/api/api";
import store from "../redux/store";

export default function Home({ matches }) {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Head>
        <title>K.F Vllaznia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullScreenNextMatch matches={matches} />
      <OurPartners />
      <BackSection>
        <NewsHighlight />
        <GamesGadget width={width} matches={matches} />
        <VllazniaTv />
        <NewsAndSocial />
        <TableGadget />
        <ShopGadget />
      </BackSection>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const matches = (await getMatches()) || [];
  return {
    props: {
      matches,
    },
  };
}
