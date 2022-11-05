import React from "react";
import Navbar from "../components/Navbar";
import ReachUsInfo from "../components/ReachUsInfo";

// import PageTitle from "../ui/PageTitle";

const ReachUs = () => {
  return (
    <>
      <Navbar />
      {/* <PageTitle title="BİZE ULAŞIN" /> */}
      <ReachUsInfo forCompaniesPage={true} />
    </>
  );
};

export default ReachUs;
