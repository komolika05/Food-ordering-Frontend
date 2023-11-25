import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Items/Meals";
import ScrollMenu from "./Components/Layout/SliderMenu";

function App() {
  return (
    <>
      <Header />
      <Meals />
    </>
  );
}

export default App;
