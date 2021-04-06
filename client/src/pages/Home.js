import React from "react";
import History from "../utils/history";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowRight from "@material-ui/icons/ArrowRight";
import styled, { css } from "styled-components";

//* styling
const Title = styled.h1`
  font-size: 5rem;
  padding: 2rem;
  margin: 1rem;
  text-align: center;
  color: ${(props) => props.theme.palette.lightBlue};
  font-family: ${(props) => props.theme.typography.heading1};
  line-height: 1;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  padding: 2rem;
  line-height: 1.5;
  margin: auto;
  text-align: center;
  color: ${(props) => props.theme.palette.darkBlue};
  font-family: ${(props) => props.theme.typography.heading2};
  width: 65%;
`;

const InfoBox = styled.h2`
  font-size: 2.5rem;
  padding: 2.5rem;
  margin: auto;
  width: 50%;
  text-align: center;
  color: ${(props) => props.theme.palette.mediumGray};
  background-color: ${(props) => props.theme.palette.mediumBlue};
  font-family: ${(props) => props.theme.typography.heading2};
  border-style: solid;
  border-width: medium;
  border-color: ${(props) => props.theme.palette.darkGray};
`;

const StyledButton = styled(Button)`
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.palette.red};
  color: ${(props) => props.theme.palette.white};
  font-family: ${(props) => props.theme.typography.menu};
  margin: 1rem auto;
  padding: 1rem;
  display: block;
  flex: inline;
`;

function Home() {
  const reRoute = () => {
    History.push("/questions");
    window.location.reload(false);
  };

  return (
    //* need Navbar component for home page //

    <Box>
      <Title>UNCLE SAM'S PIGGY BANK</Title>

      <SubTitle>
        The U.S deficit in 2020 was $2 trillion dollars. We all think just
        raising taxes on the rich will fix that... Unfortunately that's not the
        case.
      </SubTitle>

      <InfoBox>
        Plan tax rates and government spending to balance the budget.
      </InfoBox>

      <StyledButton size="large" variant="contained">
        Get Started
      </StyledButton>
    </Box>
  );
}

export default Home;
