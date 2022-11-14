import { StyledLink } from 'components/Layout/Layout.styled';
import { useLogOutUserMutation, useGetUserQuery } from 'UserApi/userApi';

export default function UserMenu() {
  const { data } = useGetUserQuery();
  console.log('data', data);
  const [logOutUser] = useLogOutUserMutation();
  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <nav>
      <StyledLink to="/contacts">Contacts</StyledLink>
      <p>{data && data.name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </nav>
  );
}
