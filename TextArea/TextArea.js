import "./TextArea.css"
import { useState } from "react";

function TextArea({fieldName, required: getValue}){

  const [text, setText] = useState("");

  const handleChange = (e) =>
  {
    e.preventDefault();
    setText(e.target.value);
    getValue({
      name: fieldName,
      value: {
        value: text,
        valid:"valid",
        error: "",
      } 
    })
  }

  return(
    <div className="textarea">
      {fieldName + ": "}
      <textarea value = {text} onChange={handleChange}>text</textarea>
    </div>
  )
}
export default TextArea;