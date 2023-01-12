import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './router/Home';
import Detail from './router/Detail';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
