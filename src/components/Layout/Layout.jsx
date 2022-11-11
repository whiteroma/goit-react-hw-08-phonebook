import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header } from './Layout.styled';
import Container from '@mui/material/Container';

export default function Layout() {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}
