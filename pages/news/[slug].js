import React from "react";
import { getNews, getSingleNews } from "../api/api";
import { BackSection, Footer } from "../../components";
import { SingleNews } from "../../components/latestComponents";

const NewsDetails = ({ news }) => {
  return (
    <div className="paddingUp">
      <BackSection>
        <SingleNews news={news} />
      </BackSection>
      <Footer />
    </div>
  );
};

export default NewsDetails;

export async function getStaticProps({ params }) {
  const data = await getSingleNews(params.slug);

  return {
    props: {
      news: data,
    },
  };
}

export async function getStaticPaths() {
  const news = await getNews();

  return {
    paths: news.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
