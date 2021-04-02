// *you can create style objects and refer to them in style = {} on elements

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import Answer from "./pages/Answer";
import Box from "@material-ui/core/Box";
//* styles


function App() {
  return (
    <Router>
      <Box>
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/answer" component={Answer} />
        <Route exact path="/results" component={Results} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/answers" component={Answer} />
      </Box>
    </Router>
  );
}

export default App;
