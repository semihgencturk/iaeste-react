import React from "react";
import styled from "styled-components";

const PageTitleContainer = styled.div`
  font-size: 24px;
  color: red;
  background: #1a1c20;
  width: 95%;
  text-align: center;
  padding: 5vh 0 5vh 5%;
`;

const PageTitle = ({ title }) => {
  return <PageTitleContainer>{title}</PageTitleContainer>;
};

export default PageTitle;
