import { useState } from "react";
import "./App.css"

function App() {

const [count, setCount] = useState(0);
return(
<div>

<h2>React Counter App</h2>
<h1>{count}</h1>
<button
onClick={() => {
setCount(count + 1);

}}
>
Increase
</button>

<button
    onClick={() => {
      setCount(count - 1);
    }}
  >
    Decrease
  </button>

</div>
);
}

export default App;