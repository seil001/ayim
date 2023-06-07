import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Registr open={open} setOpen={setOpen} /> */}
    </div>
  );
}

export default App;
