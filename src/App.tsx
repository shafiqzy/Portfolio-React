import "./App.css";
import { Header } from "./component/Header/Header";
import { PageRoutes } from "./routes/PageRoutes";
function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 lg:pt-7">
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
