import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
} from "react-router-dom";
import routes from "./routes/routes";
import Header from "./Components/Layout/Header";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
