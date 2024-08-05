import "./App.css";
import About from "./components/About";
import Myform from "./components/Myform"; //component ko naam always capital.
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="ReactSikdai" contact="contact" />
        <Routes>
          {/* Yo chai props.title vanne variable ma gako jastai samjhinu. title ma je value rakhyo tyo value gayera props object ma janxa ani tya component load huda replace hunxa. Contact chai gayab hunxa aba since i passed  null value*/}
          {/* <h1 className="text-slate-800 font-bold text-5xl">Hello World</h1> */}
          {/* route ma exact lekhna ekdam imp xa natra mismatch route hunxa */}
          <Route
            exact
            path="/"
            element={<Myform place="Enter your text" butName="Change Case" />}
          ></Route>
          <Route exact path="/About" element={<About />}></Route>
          {/* place and butName are passed it as a prop in the Myform component */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; //Yo logic chai need to revise once again. Export Import wala.
