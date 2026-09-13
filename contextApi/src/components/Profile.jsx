import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="py-10">
        <p>Please Login</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user?.username}</h2>
    </div>
  );
}

export default Profile;
