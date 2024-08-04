import "./App.css";
import Myform from "./components/Myform"; //component ko naam always capital.
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="ReactSikdai" contact="contact" />
      {/* Yo chai props.title vanne variable ma gako jastai samjhinu. title ma je value rakhyo tyo value gayera props object ma janxa ani tya component load huda replace hunxa. Contact chai gayab hunxa aba since i passed  null value*/}
      {/* <h1 className="text-slate-800 font-bold text-5xl">Hello World</h1> */}
      <Myform place="Enter your text" butName="Change Case" />
      {/* place and butName are passed it as a prop in the Myform component */}
    </>
  );
}

export default App; //Yo logic chai need to revise once again. Export Import wala.
