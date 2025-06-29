import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layouts/AppLayout";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import Foods from "./pages/Foods";
import Meals from "./pages/Meals";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <p>Authentication Error</p>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        index
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Landing />}
      />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/meals" element={<Meals />} />
      </Route>
    </Routes>
  );
}

export default App;
