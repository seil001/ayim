// import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

// import Home from "./components/Home";
// import Navbar from "./components/Navbar";

function App() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <MainRoutes />
      <Navbar />
      {/* <Registr open={open} setOpen={setOpen} /> */}
    </div>
  );
}

export default App;
