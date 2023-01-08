import { useState, useEffect } from 'react';

function App() {
  const [showing, setShowing] = useState(false);

  function Hello() {
    useEffect(() => {
      console.log('hi');
      return () => {
        console.log('bye');
      };
    }, []);
    return <h1>Hello</h1>;
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button
        onClick={() => {
          setShowing((prev) => !prev);
        }}
      >
        {showing ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default App;
