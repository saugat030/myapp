import React, { useState } from "react"; //useState hook ho euta jun chia class based component ma thiyo function based ma use garna yo garnai parxa teti ho
import { toast } from "react-toastify";
import { motion } from "framer-motion";
export default function Myform(props) {
  const handleCase = () => {
    console.log(text);
    toast.error("Text toggled!");
    let newText = text;
    if (text === text.toUpperCase()) {
      newText = text.toLowerCase();
      setText(newText);
    } else {
      newText = text.toUpperCase();
      setText(newText);
    }

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
  const handleCopy = () => {
    let copy = document.getElementById("myInput");
    copy.select();
    navigator.clipboard
      .writeText(copy.value)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const [text, setText] = useState("Enter your text");
  //   text = "fdsfsdf"; not allowed
  // setText  ("jsjsjsj"); allowed
  return (
    <>
      <form className="m-5 container mx-auto">
        <h1 className="text-xl text-slate-700 my-3">{props.place} :</h1>
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 100, y: 200, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
          drag
          className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50"
        >
          <div className="px-4 py-2 bg-white rounded-t-lg ">
            <textarea
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0 "
              id="myInput"
              placeholder={props.place}
              value={text}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 border-t ">
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              onClick={handleCase}
              type="button"
            >
              {props.butName1}
            </button>
            {/* aba onChange use garera balla edit garna milxa tyo constant value={text} doesnot work in text area text area tag vitra kai text use hunxa value ko satta which is a constant {text} */}
            {/* since I have used it in the value feild of the input tag , the value cannpt be changed from {text} as it is a constant. */}
            {/* however it can be changed by using useState when firing an event.*/}
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              onClick={handleCopy}
              type="button"
            >
              {props.butName2}
            </button>
          </div>
        </motion.div>
      </form>
      <div className="w-full container mx-auto">
        <p>{text}</p>
      </div>
      <div className="w-full container mx-auto">
        <p>
          {text.length} Characters and{" "}
          {
            text.split(/\s/).filter((word) => {
              return word.length !== 0;
            }).length
          }{" "}
          Words.
        </p>
        {/* filter (array method) ko kam = Do not count elements that has a blank i.e whos length is 0. */}
      </div>
    </>
  );
}
