import { useEffect, useRef, useState } from "react";

function UseRef() {
    const [input , setInput] = useState("")
  const inputElement = useRef();
  const count = useRef(0);

//   const focusInput = () => {
//     inputElement.current.focus();
//   };
  useEffect(() => {
    if(input >= 0){
        count.current = count.current + 5;
    }
    console.log(count.current);
    
  });



  return (
    <div className="App" >
        <div>
            <h4>Use Ref Demo</h4>
        {/* <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button> */}
        </div>
        <div>
        <input type="text" value={input} ref={inputElement} onChange={(e) =>setInput( e.target.value)} />
        <h1>Render Count: {count.current}</h1>
        </div>
      <label >It will show the persist value </label>

    </div>
  );
}

export default UseRef; 