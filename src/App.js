import React, { useState } from "react";


function App() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
  return (
    <div className="App">
      <button onClick={toggleTrueFalse}>
         Toggle me
        </button>

        <div className={isToggled? "text red" : " text"}> Hello Toggle</div>
    </div>
  );
}

export default App;

