import "./App.css";
import { Header } from "./component/Header/Header";
import { PageRoutes } from "./routes/PageRoutes";
function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Main Content</h1>
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
