import React from "react";
import { BackSection, Footer } from "../components/index";
import { News } from "../components/latestComponents";
import { getNews } from "../pages/api/api";

const latest = ({ news }) => {
  return (
    <div className="paddingUp">
      <BackSection>
        <News news={news} />
      </BackSection>
      <Footer />
    </div>
  );
};

export default latest;

export async function getStaticProps() {
  const news = (await getNews()) || [];
  return {
    props: {
      news,
    },
  };
}
