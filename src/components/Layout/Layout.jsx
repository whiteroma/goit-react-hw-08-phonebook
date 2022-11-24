import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthNav from 'components/UserMenu/AuthNav';
import { useGetUserQuery } from 'UserApi/userApi';
import { CircularProgress } from '@mui/material';

export default function Layout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const token = useSelector(state => state.auth.token);
  useGetUserQuery({}, { skip: !token });

  return (
    <>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </>
  );
}
