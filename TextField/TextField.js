//v1.0 6/11/24
import { useState } from "react"
import "./TextField.css"

function TextField({fieldName, validate, maxLength = 128, upperCase = false}) {

  const [text, setText] = useState("");
  const [mode, setMode] = useState("valid");

  const isEmpty = ( string) => {
    if(string.length <= 0)
      return true;
    else return false;
  }
  const isNumber = ( number) => {
    if (!isNaN(number)) return true;
    else return false;
  }
  const isOnlyText = ( string) => {
    if(string.length <= 0)
      return true;
    else return false;
  }

  

  const validation = () =>{ // validate some parameters automatic so make process easy
    
  }
 
  const setInput = (e) =>{

    const string = e.target.value;
    
    if(!isEmpty(string)){
      setMode("valid")
    }else{
      setMode("invalid")
    }
    setText( string)
    console.log(string)
  }

  
  return (
    <div className= {`textField_${mode}`}>
      {fieldName + ": "}
      <input type="text" value={text} onChange={setInput}  maxLength={maxLength}/>
    </div>
  )

}

export default TextField;