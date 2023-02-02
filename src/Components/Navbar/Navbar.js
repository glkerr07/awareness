
import { NavBarTitle, StyledLink } from "./Navbar.style";

const Navbar =()=>{
    return (
        <>
            <NavBarTitle>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </NavBarTitle>
        </>
    )
}

export default Navbar;