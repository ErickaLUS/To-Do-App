import { useEffect } from "react";
import TODO from "./components/TODO";
import { getAllToDo, addToDo, updateToDo,deleteToDo } from "./components/utils/Api";
import { useState } from "react";
function App() {

  const [toDo, setToDo] =useState([])
  const [text, setText] =useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId,  setToDoId] = useState("")
  useEffect(()=>{
    getAllToDo(setToDo)
  }, [])
  const updateMode = (_id, text) => {
      setIsUpdating(true)
      setText(text)
      setToDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Application TODO</h1>
        <div className="top">
          <input type="text" placeholder="Nouvelle tâche..." value={text} onChange={(e)=> setText (e.target.value)}/>
          <div 
          className="add" 
          onClick={isUpdating ?
           () => updateToDo(toDoId,text,setToDo, setText,setIsUpdating)
            : () => addToDo(text,setText,setToDo)}>
             
              {isUpdating ?  "update" : "Ajouter"}
              
              </div>
        </div>
        <div className="list">

      {toDo.map((item)=> <TODO key={item._id} text={item.text}
       updateMode={()=> updateMode(item._id, item.text)}
       deleteToDo={() => deleteToDo(item._id,setToDo)}
       />)}

          
        </div>
      </div>
    </div>
  );
}

export default App;
