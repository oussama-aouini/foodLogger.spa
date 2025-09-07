import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box } from "@mui/material";
import { useGetUserQuery } from "../services/userApi";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const { data, error, isLoading } = useGetUserQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>There was an error :/</p>;

  return (
    <Box>
      <h2>Profile</h2>
      {isAuthenticated && (
        <div>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={user?.picture}
              alt={user?.name}
            />
            <Box>
              <p>userName</p>
              <Box sx={{ display: "flex", gap: 2 }}>
                <p>Following</p>
                <p>followers</p>
              </Box>
            </Box>
          </Box>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>BMR: {data?.bmr}</p>
          <p>Height: {data?.height}</p>
          <p>Weight: {data?.weight}</p>
          <p>Sex: {data?.sex}</p>
          {/* <p>Age: {data?.bmr}</p> */}
          {/* <p>Expendeture: {data?.bmr}</p> */}
        </div>
      )}
    </Box>
  );
};
export default Profile;
