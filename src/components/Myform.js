import React, { useState } from "react"; //useState hook ho euta jun chia class based component ma thiyo function based ma use garna yo garnai parxa teti ho

export default function Myform(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    document.title = "WOOoO";
    // setInterval(() => {
    //   document.title = "weeeeee"; //Flashy title banauna
    // }, 4000);
    // setInterval(() => {
    //   document.title = "WAUUUU";
    // }, 3000);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text");
  //   text = "fdsfsdf"; not allowed
  // setText = "jsjsjsj"; allowed
  return (
    <>
      <form className="w-full mx-auto  max-w-sm my-24">
        <h1 className="text-xl text-slate-700">{props.place} :</h1>
        {/* state variable use gareko this constant variable cannot be changed unless setText is used. */}

        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="myInput"
            value={text}
            placeholder={props.place}
            onChange={handleChange}
          />
          {/* aba onChange use garera balla edit garna milxa tyo constant value={text} lai  */}
          {/* since I have used it in the value feild of the input tag , the value cannpt be changed from {text} as it is a constant. */}
          {/* however it can be changed by using useState when firing an event.           */}

          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            onClick={handleClick}
            type="button"
          >
            {props.butName}
          </button>
        </div>
      </form>
    </>
  );
}
