import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  // run everytime when rerendered
  console.log('rendered');
  // run only once when rendered
  useEffect(() => {
    console.log('Call the API!');
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
