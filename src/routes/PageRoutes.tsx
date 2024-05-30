import { Layout } from "../component/Layout/Layout";
import { Route, Switch, Router } from "wouter";
// import { ProtectedRoute } from "./ProtectedRoute";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { NotFoundPage } from "src/pages/NotFoundPage/NotFoundPage";
import { ROUTE } from "src/constant";
import { AboutPage } from "src/pages/AboutPage/AboutPage";

export const PageRoutes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={ROUTE.base}>
            {/* <ProtectedRoute> */}
            <DashboardPage />
            {/* </ProtectedRoute> */}
          </Route>
          <Route path={ROUTE.about}>
            {/* <ProtectedRoute> */}
            <AboutPage />
            {/* </ProtectedRoute> */}
          </Route>
          {/* <ProtectedRoute> */}
          <NotFoundPage />
          {/* </ProtectedRoute> */}
        </Switch>
      </Layout>
    </Router>
  );
};
