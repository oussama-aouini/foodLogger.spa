import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LogoutButton />
          <LoginButton />
          <Profile />
        </>
      )}
    </div>
  );
}

export default App;
