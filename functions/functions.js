import { getMatches } from "../pages/api/api";
import React from "react";

const UpcommingMatch = ({ matches }) => {
  return matches;
};

export async function getStaticProps() {
  const matches = (await getMatches()) || [];
  return {
    props: {
      matches,
    },
  };
}

export default UpcommingMatch;
