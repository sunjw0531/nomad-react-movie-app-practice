import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => {
    setValue((prev) => prev + 1);
  };

  useEffect(() => {
    console.log('I run only once!');
  }, []);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log('I run when counter & keyword changes.');
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
