import "./App.css";
import About from "./components/About";
import Myform from "./components/Myform"; //component ko naam always capital.
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="Edit-Me" contact="contact" />
        <Routes>
          {/* Yo chai props.title vanne variable ma gako jastai samjhinu. title ma je value rakhyo tyo value gayera props object ma janxa ani tya component load huda replace hunxa. Contact chai gayab hunxa aba since i passed  null value*/}
          {/* <h1 className="text-slate-800 font-bold text-5xl">Hello World</h1> */}
          {/* route ma exact lekhna ekdam imp xa natra mismatch route hunxa */}
          <Route
            exact
            path="/"
            element={
              <Myform
                place="Enter your text"
                butName1="Toggle Case"
                butName2="Copy Text"
              />
            }
          ></Route>
          <Route exact path="/About" element={<About />}></Route>
          {/* place and butName are passed it as a prop in the Myform component */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App; //Yo logic chai need to revise once again. Export Import wala.
