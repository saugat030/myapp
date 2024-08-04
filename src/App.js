import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="ReactSikdai" contact="contact" />
      {/* Yo chai props.title vanne variable ma gako jastai samjhinu. title ma je value rakhyo tyo value gayera props object ma janxa ani tya component load huda replace hunxa. Contact chai gayab hunxa aba since i passed  null value*/}
      <h1 className="text-slate-800 font-bold text-5xl">Hello World</h1>
    </>
  );
}

export default App; //Yo logic chai need to revise once again. EXport Import wala.
