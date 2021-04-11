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
  flex: 1;
  position: static;
  background-color: ${(props) => props.theme.palette.mediumBlue};
  color: ${(props) => props.theme.palette.mediumGray};
  font-family: ${(props) => props.theme.typography.menu};
  min-height: 75px;
  /* left: auto; */
  /* right: 0; */
  display: flex;
`;

const MenuLink = styled.h3`
  flex: 1;
  display: flex;
  font-size: 1em;
  padding: 1em;
  line-height: auto;
  text-align: center;
  color: ${(props) => props.theme.palette.mediumGray};
  font-family: ${(props) => props.theme.typography.MenuItem};
  justify-content: flex-end;
`;

const RightSpan = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export default function Navigation() {
  return (
    <StyledNav>
      <Toolbar>
        <IconButton spacing={3}>
          <FedIcon />
        </IconButton>
        <RightSpan>
          {" "}
          <IconButton>
            <MenuLink>Log In</MenuLink>
          </IconButton>
          <IconButton>
            <MenuLink>Top Budgets</MenuLink>
          </IconButton>
        </RightSpan>
      </Toolbar>
    </StyledNav>
  );
}
