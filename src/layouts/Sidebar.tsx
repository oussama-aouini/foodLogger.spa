import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          width: "15vw",
        }}
      >
        <NavLink to="/dashboard" end>
          Dashboard
        </NavLink>
        <NavLink to="/profile" end>
          Profile
        </NavLink>
      </nav>
    </div>
  );
};
export default Sidebar;
