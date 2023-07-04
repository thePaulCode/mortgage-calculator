import NavBar from "./components/NavBar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";


function App() {
  return (
    <div className="App">
    <NavBar />
    <SliderSelect />
    <TenureSelect />
    <Result/>
    </div>
  );
}

export default App;
