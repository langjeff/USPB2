import React from "react";
import History from "../utils/history";
import { Box, Title, PageTheme } from "./PageStyle";
import Button from "@material-ui/core/Button";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { ThemeProvider } from "styled-components";

function Home() {
  const reRoute = () => {
    History.push("/questions");
    window.location.reload(false);
  };

  return (
    //* need Navbar component for home page //
    <ThemeProvider theme={PageTheme}>
      <Box>
        <Title>UNCLE SAM'S PIGGY BANK</Title>
        <h2>
          The U.S deficit in 2020 was $2 trillion dollars. We all think just
          raising taxes on the rich will fix that... Unfortunately that's not
          the case.
        </h2>

        <h2>Plan tax rates and government spending to balance the budget.</h2>
        <Button
          endIcon={<ArrowRight />}
          size="small"
          variant="contained"
          color="error"
        >
          Start
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
