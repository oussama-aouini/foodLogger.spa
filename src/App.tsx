import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
import Profile from "./pages/Profile";

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <p>Authentication Error</p>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
