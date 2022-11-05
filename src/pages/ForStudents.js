import React from "react";
import { useRef } from "react";
// import styled from "styled-components";
import Navbar from "../components/Navbar";
import ForStudentsBundle from "../components/ForStudentsBundle";
import AboutUsInfo from "../components/AboutUsInfo";
import ForStudentsAdvantages from "../components/ForStudentsAdvantages";
import ApplicationProcess from "../components/ApplicationProcess";
import Divider from "../ui/Divider";
import ReachUsInfo from "../components/ReachUsInfo";
import BeIaesteIntern from "../components/BeIaesteIntern";
import Events from "../components/Events";

const ForStudents = () => {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  const myRef6 = useRef(null);

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

  const executeScroll5 = () => {
    myRef5.current.scrollIntoView({ behavior: "smooth" });
  };

  const executeScroll6 = () => {
    myRef6.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div onClick={executeScroll}>
        <ForStudentsBundle />
        <Divider />
      </div>
      <div onClick={executeScroll2} ref={myRef}>
        <AboutUsInfo forStudentsPage={true} />
        <Divider />
      </div>
      <div onClick={executeScroll3} ref={myRef2}>
        <ForStudentsAdvantages />
        <Divider />
      </div>
      <div onClick={executeScroll4} ref={myRef3}>
        <ApplicationProcess />
        <Divider />
      </div>
      <div onClick={executeScroll5} ref={myRef4}>
        <BeIaesteIntern />
        <Divider />
      </div>
      <div onClick={executeScroll6} ref={myRef5}>
        <Events />
        <Divider />
      </div>
      <div ref={myRef6}>
        <ReachUsInfo forCompaniesPage={true} />
      </div>
    </>
  );
};

export default ForStudents;
