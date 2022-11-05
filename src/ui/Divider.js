import React from "react";
import styled from "styled-components";

const DividerContainer = styled.div`
  height: 2vh;
  background-color: #3c4048;
  position: relative;

  ::before {
    content: "";
    width: 100%;
    height: 42px;
    position: absolute;
    bottom: -0.3%;
    left: 0;
    background-size: auto;
    background-repeat: repeat no-repeat;
    background-position: 17vw bottom;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 22L33 19C82 13 133 14 200 29C267 44 333 67 400 70C467 74 533 59 600 40C667 22 733 0 800 0C867 0 933 22 1000 29C1067 37 1133 29 1167 26L1200 22V134H1167C1133 134 1067 134 1000 134C933 134 867 134 800 134C733 134 667 134 600 134C533 134 467 134 400 134C333 134 267 134 200 134C133 134 67 134 33 134H0V22.332Z' fill='%23b2b2b2'/></svg>");
  }

  @media (max-width: 850px) {
    ::before {
      height: 21px;
    }
  }
`;

const Divider = () => {
  return <DividerContainer />;
};

export default Divider;
