import React, { useState } from "react";
import "./Data.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

export default function Data(props) {
  const [line, setline] = useState(false)
  const cutit = () => {
    setline(true);
  };

  return (
    <div className="listofdata">
      <Button onClick={() => props.onselect(props.id)}>
        <DeleteIcon />
      </Button>
      <Button onClick={cutit}>
        <CheckIcon />
      </Button>

      <li  style={{textDecoration:line?"line-through":"none"}}>{props.data}</li>
    </div>
  );
}
