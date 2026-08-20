import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect( () => {
    console.log("Count Changed");
  }, [count]
);

  return (
    <div>
      <button onClick={ () => {
        setCount(count - 1);
      }}>
        -
      </button>
      
      {count}
      
      <button onClick={ () => {
        setCount(count + 1);
      }}>
        +
      </button>

    </div>
  );
}

export default App;