import React,{useState} from 'react'
import Alert from './Alert';

export default function TextForm(props) {
  const [alert,setAlert] = useState('');

  const showAlert=  (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert('');
    },1500);
   }
  const handleUpClick=()=>{
     console.log("submitted"+text);
     let newText=text.toUpperCase();
     setText(newText)
     showAlert("Convert to Uppercase!","success");
  }
  const handleLowClick=()=>{
    console.log("submitted" +text);
    let newText1=text.toLowerCase();
    setText(newText1)
    showAlert("Convert to Lowercase!","success");
 }
 const handleClearClick=()=>{
  console.log("submitted" +text);
  let newText1=" ";
  setText(newText1)
  showAlert("Text Cleared!","success");
}


  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value)
 }
 const copyText = () => {
  navigator.clipboard.writeText(text)
  showAlert("Copied to Clipboard!","success");

 
}

const handleExtraSpaces =()=>{
  let newText =text.split(/[ ]+/);
  setText(newText.join(" "))
  showAlert("Remove Extra Spaces!","success");
}
  
  const [text,setText] = useState('');
  // setText("kfdjdhdj");
  return (
    <>
    <Alert alert={alert}/>
    <div className='contanier' style={{color:props.mode==='dark'?'white':'#1c293e'}}>
    <h1>Enter the text to analyze</h1>
    <div className="mb-3">
   <textarea placeholder='Enter text here' className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#484141':'white',color:props.mode==='dark'?'white':'#1c293e'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
   </div>

   </div>
   <button type="button" className="btn btn-success my-3" onClick={handleUpClick}>Convert To Uppercase</button>
   <button type="button" className="btn btn-success my-3 mx-3" onClick={handleLowClick}>Convert To LowerCase</button>
   <button type="button" className="btn btn-success my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
   <button type="button" className="btn btn-success my-3 mx-2" onClick={copyText}>Copy Text</button>
   <button type="button" className="btn btn-success my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

   <div container style={{color:props.mode==='dark'?'white':'#1c293e'}}>
    <h1>Your text summary</h1>
    <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
  
    </>
  )
}
   