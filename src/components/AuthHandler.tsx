import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, type ReactNode } from "react";
import { clearToken, setToken } from "../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

type AuthHandlerProps = {
  children: ReactNode; // <-- Use ReactNode to type the children prop
};

const AuthHandler = ({ children }: AuthHandlerProps) => {
  const { isLoading, error, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  const dispatch = useAppDispatch();
  const tokenInReduxStore = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          dispatch(setToken(token));
        } catch (error) {
          console.error("Error getting token:", error);
          dispatch(clearToken());
        }
      } else {
        dispatch(clearToken());
      }
    };

    if (!isLoading) {
      getToken();
    }
  }, [isAuthenticated, isLoading, getAccessTokenSilently, dispatch]);

  if (error) {
    return <p>Authentication Error :/</p>;
  }

  // Display a loading screen while the Auth0 SDK is authenticating
  // or while the token is being fetched and set in Redux
  if (isLoading || (isAuthenticated && !tokenInReduxStore)) {
    return <div>Loading...</div>;
  }
  return children;
};
export default AuthHandler;
