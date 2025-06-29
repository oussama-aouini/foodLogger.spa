import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#262624",
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <LogoutButton />
      <LoginButton />
    </div>
  );
};
export default Header;
