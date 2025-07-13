import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <h2>Profile</h2>
      {isAuthenticated && (
        <div>
          <p>Following pop up displays the list of followers with search bar</p>
          <p>followers</p>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          <p>BMR:_</p>
          <p>Height:_</p>
          <p>Weight:_</p>
          <p>Age:_</p>
          <p>Sex:_</p>
        </div>
      )}
    </div>
  );
};
export default Profile;
