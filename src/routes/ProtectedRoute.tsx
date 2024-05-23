import { STORAGE_KEY } from "src/constant";
import { encryptedStorageGetItem } from "src/utils/encryption/encryptStorage";
import { PropsWithChildren } from "react";
import { useLocation } from "wouter";

type ProtectedRouteProps = { redirectPath?: string } & PropsWithChildren;
export const ProtectedRoute = ({
  redirectPath = "~/login",
  children,
}: ProtectedRouteProps) => {
  const [, nav] = useLocation();
  //   const { setIsLoggedIn } = useAuthContext();

  encryptedStorageGetItem(STORAGE_KEY.USER).then((val) => {
    console.log("Session token get from route protecter", val);
    if (!val) {
      console.log("Try to redirect");
      //   setIsLoggedIn(true);
      return nav(redirectPath);
    }
  });
  return children;
};
