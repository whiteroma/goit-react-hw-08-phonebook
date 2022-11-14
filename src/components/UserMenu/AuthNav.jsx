import { StyledLink } from "components/Layout/Layout.styled"

export default function AuthNav () {


    return(
        <nav>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
        </nav>) 
}