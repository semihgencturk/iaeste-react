import React from "react";
import { useRef } from "react";
// import styled from "styled-components";
import Navbar from "../components/Navbar";
import ForStudentsBundle from "../components/ForStudentsBundle";
import AboutUsInfo from "../components/AboutUsInfo";
import ForStudentsAdvantages from "../components/ForStudentsAdvantages";
import Companies from "../components/Companies";
import Divider from "../ui/Divider";
import ReachUsInfo from "../components/ReachUsInfo";

const ForStudents = () => {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScroll2 = () =>
    myRef2.current.scrollIntoView({ behavior: "smooth" });

  const executeScroll3 = () => {
    myRef3.current.scrollIntoView({ behavior: "smooth" });
  };

  const executeScroll4 = () => {
    myRef4.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div onClick={executeScroll}>
        <ForStudentsBundle />
        <Divider />
      </div>
      <div onClick={executeScroll2} ref={myRef}>
        <AboutUsInfo forCompaniesPage={true} />
        <Divider />
      </div>
      <div onClick={executeScroll3} ref={myRef2}>
        <ForStudentsAdvantages />
        <Divider />
      </div>
      <div onClick={executeScroll4} ref={myRef3}>
        <Companies />
        <Divider />
      </div>
      <div ref={myRef4}>
        <ReachUsInfo forCompaniesPage={true} />
      </div>
    </>
  );
};

export default ForStudents;
