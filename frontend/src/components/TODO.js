import React from 'react'
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import '../index.css'
const TODO = ({text,updateMode,deleteToDo}) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onclick={deleteToDo} />
      </div>
    </div>
  );
}

export default TODO