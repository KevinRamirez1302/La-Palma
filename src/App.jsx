import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar } from './views/navbar.jsx';
import { Home } from './views/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
