import { useEffect, useState } from 'react';
import Movies from './components/Movies';
import Home from './router/Home';
import Detail from './router/Detail';
function App() {
  return (
    <>
      <Home />
      <Detail />
    </>
  );
}

export default App;
