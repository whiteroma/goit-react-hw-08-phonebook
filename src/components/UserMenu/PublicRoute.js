import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute({ restricted }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return shouldNavigate ? <Navigate to="/contacts" replace /> : <Outlet />;
}
