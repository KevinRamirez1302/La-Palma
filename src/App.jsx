import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar } from './views/navbar.jsx';
import { MainPage } from './views/mainPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
