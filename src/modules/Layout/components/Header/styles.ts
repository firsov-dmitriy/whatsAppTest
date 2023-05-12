import { NavLink } from "react-router-dom";
import { styled, css } from "styled-components";



export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    &.active {
        text-decoration: underline;
    
    }
`