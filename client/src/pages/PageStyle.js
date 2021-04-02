import React from "react";

import styled from "styled-components";

// styling for box component material-ui container
export default function PageStyle() {
  const PageTheme = {
    palette: {
      white: "#f1faee",
      lightBlue: "#a8dadc",
      mediumBlue: "#a8dadc",
      darkBlue: "#457b9d",
      Red: "#1d3557",
      darkGray: "#2b2d42",
      lightGray: "#8d99ae",
      mediumGray: "#edf2f4",
    },

    typography: {
      heading1: "'Poppins', sans-serif",
      heading2: "'Open Sans', sans-serif",
      menu: "'Open Sans', sans-serif",
      text1: "'Open Sans', sans-serif",
      text2: "'Open Sans', sans-serif",
      list: "'Noto Sans JP', sans-serif",
      numbers: "'Castoro', serif",
    },
  };

  const Box = styled.container`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
  `;

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${(props) => props.pageTheme.palette.lightBlue};
    font: ${(props) => props.pageTheme.typography.heading1};
  `;
}
