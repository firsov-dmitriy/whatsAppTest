import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled, css } from "styled-components";



export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    &.active {
        text-decoration: underline;
    
    }
`
export const StyledAppBarWrapper = styled(Box)`
 display: flex; 
 height: 61px;
`