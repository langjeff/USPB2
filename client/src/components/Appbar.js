// react import
import React from "react";
// styled componenent import
import styled, { css } from "styled-components";
// material ui-core components import
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import FedIcon from "./icon";
// import { ReactComponent as MyIcon } from "./icon.svg"

const StyledNav = styled(AppBar)`
  position: static;
  background-color: ${(props) => props.theme.palette.mediumBlue};
  color: ${(props) => props.theme.palette.mediumGray};
  font-family: ${(props) => props.theme.typography.menu};
  min-height: 75px;
  left: auto;
  right: 0;
`;

const MenuLink = styled.h3`
  font-size: 1em;
  padding: 1em;
  line-height: auto;
  text-align: center;
  color: ${(props) => props.theme.palette.mediumGray};
  font-family: ${(props) => props.theme.typography.MenuItem};
`;

export default function Navigation() {
  return (
    <StyledNav>
      <Toolbar>
        <IconButton>
          <FedIcon />
        </IconButton>
        <IconButton>
          <MenuLink>Log In</MenuLink>
        </IconButton>
        <IconButton>
          <MenuLink>Top Budgets</MenuLink>
        </IconButton>
      </Toolbar>
    </StyledNav>
  );
}
