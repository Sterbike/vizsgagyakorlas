import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import FestivalDetails from './pages/FestivalDetails';
import AddFestival from './pages/AddFestival';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/fesztivalHozzaadas" element={<AddFestival />}/>
          <Route path="/fesztivalAdatok" element={<FestivalDetails />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
