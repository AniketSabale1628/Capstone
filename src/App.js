import './App.css';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router';
import Page2 from './pages/Page2';
import Climat from './pages/Climat';

function App() {
  return (
    <div>
      {/* <Link to="/"><LoginPage/></Link> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Climat" element={<Climat />} />
      </Routes>
    </div>
  );
}

export default App;
