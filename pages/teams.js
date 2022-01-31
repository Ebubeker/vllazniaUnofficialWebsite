import React from "react";
import { BackSection, Footer } from "../components";
import { Teams } from "../components/teamsComponents";

const teams = () => {
  return (
    <div className="paddingUp">
      <BackSection>
        <Teams />
      </BackSection>
      <Footer />
    </div>
  );
};

export default teams;
