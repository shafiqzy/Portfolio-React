import "./App.css";
import { Header } from "./component/Header/Header";
import { BaseLayout } from "./component/Layout/BaseLayout";
import { PageRoutes } from "./routes/PageRoutes";
function App() {
  return (
    <BaseLayout>
      <Header />
      <div className="container mx-auto p-4 lg:pt-7">
        <PageRoutes />
      </div>
    </BaseLayout>
  );
}

export default App;
