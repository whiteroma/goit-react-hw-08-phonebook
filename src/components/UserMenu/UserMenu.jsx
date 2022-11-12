import { useLogOutUserMutation, useGetUserQuery } from "UserApi/userApi";


export default function UserMenu() {
    const {data} = useGetUserQuery()
    console.log("data", data);
    const [logOutUser] = useLogOutUserMutation();
  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div>
      {/* <p>{data.email}</p> */}
      <button onClick={handleLogOut}>Logout</button>
    </div>
    
  );
}
