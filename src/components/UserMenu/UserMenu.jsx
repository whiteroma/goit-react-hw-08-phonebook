// import { useDispatch } from "react-redux";
import { useLogOutUserMutation, useGetUserQuery } from "UserApi/userApi";
// import { setCredentials } from 'redux/authSlice';


export default function UserMenu() {
    const {data} = useGetUserQuery()
    console.log("data", data);
    const [logOutUser] = useLogOutUserMutation();
  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div>
      <p>{data && data.email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
    
  );
}
