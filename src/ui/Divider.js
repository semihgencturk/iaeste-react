import React from "react";
import styled from "styled-components";

const DividerContainer = styled.div`
  height: 1vh;
  background: rgb(178, 178, 178);
  background: linear-gradient(
    135deg,
    rgba(178, 178, 178, 1) 0%,
    rgba(60, 64, 72, 1) 100%
  );
`;

const Divider = () => {
  return <DividerContainer />;
};

export default Divider;
