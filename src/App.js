import React, { useState } from "react";
import Data from "./Component/Data";
import "./App.css";
import Button from '@material-ui/core/Button';

export default function App() {
  const [input1, setinput1] = useState("");
  const [data, setdata] = useState(["buy mango"]);

  function update(e) {
    setdata((intialData) => {
      return [...intialData, input1];
    });
    setinput1("");
  }
  const inputevent = (event) => {
    setinput1(event.target.value);
  };
  const deleteitem = (id) => {
    setdata((intialData) => {
      return intialData.filter((data, id1) => {
        return id !== id1;
      });
    });
  };
  const reset = ()=> {
    setdata((intialData) => {
      return [];
    })
  }

  return (
    <div className="mainbody">
      <div className="innerbody">
        <br />
        <h1>ToDo list</h1>
        <br /><br />
        <div className="inputfield">
          <input
            type="text"
            placeholder="Add a note here"
            onChange={inputevent}
            value={input1}
            required={true}
          />
          <Button className="reset" onClick={update}> ➕ </Button>
          <Button  className="reset" onClick={reset}> reset </Button>

        </div>
        <div className="listofdata">
        <br />
          <ul>
            {data.map((e, index) => {
              return (
                <Data data={e} key={index} id={index} onselect={deleteitem} />
      
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
