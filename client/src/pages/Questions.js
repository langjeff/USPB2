import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import API from "../utils/API";
import Slider from "@material-ui/core/Slider";
import History from "../utils/history";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowRight from "@material-ui/icons/ArrowRight";
import styled, { css } from "styled-components";
import Navigation from "../components/Appbar";

//* styling
const StyledBox = styled(Box)`
  margin: 5px;
  height: 100px;
`;

function Question() {
  // declaring a prop variable to pass into components
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = () => {
    API.getAllTax()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledBox>
      <Slider
        orientation="vertical"
        defaultValue={30}
        aria-labelledby="vertical-slider"
      />
    </StyledBox>
  );
}

export default Question;

//! prior code for render
// <div className="container">
//   <div className="logo">
//     <img
//       // src={USPB_LOGO}
//       className="Qlogo"
//       alt="Uncle Sam's Piggy Bank Logo"
//       align="center"
//     />
//   </div>

//   <div>
//     <Card question={questions} />
//   </div>
// </div>
