import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header } from './Layout.styled';
import Container from '@mui/material/Container';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export default function Layout() {
  const logged = useSelector(state => state.auth.isLoggedIn);
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/contacts">Contacts</StyledLink>
          {logged ? (
            <UserMenu />
          ) : (
            <>
              <StyledLink to="/register">Register</StyledLink>
              <StyledLink to="/login">Log in</StyledLink>
            </>
          )}
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}
