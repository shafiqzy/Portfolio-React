import { Layout } from "src/component/Layout/Layout";
import { Route, Switch } from "wouter";
// import { ProtectedRoute } from "./ProtectedRoute";
import { DashboardPage } from "src/pages/DashboardPage/DashboardPage";

export const PageRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          {/* <ProtectedRoute> */}
          <DashboardPage />
          {/* </ProtectedRoute> */}
        </Route>
      </Switch>
    </Layout>
  );
};
