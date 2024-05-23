import { PropsWithChildren } from "react";
import { useRoute } from "wouter";
import { BaseLayout } from "src/component/Layout/BaseLayout";

export const Layout = ({ children }: PropsWithChildren) => {
  //   const [matchLogin] = useRoute("/login/*");
  const [matchRoot] = useRoute("/*");

  //   if (matchLogin) return <LoginLayout>{children}</LoginLayout>;
  if (matchRoot) return <BaseLayout>{children}</BaseLayout>;
  return children;
};
