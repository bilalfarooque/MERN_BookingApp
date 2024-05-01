import './App.css'
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import List from './pages/List/List';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';



function App() {
  

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotel/:id" element={<Hotel/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
