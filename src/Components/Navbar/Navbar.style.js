import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavBarTitle = styled.div`
    background-color: grey;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    padding: 1rem;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited{
        color: black;
    };
    &:hover{
        color: blue;
    };
    &:active{
        color: red;
    };

`