import Home from './Pages/Home/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Archive from './Pages/Archive/Archive';
import Bin from './Pages/Bin/Bin';



function App() {
 

  return (
    <>
       <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path="/archive" element={<Archive/>}></Route>
          <Route path="/bin" element={<Bin/>}></Route>
      </Routes>
      
    </>
    
  );
}

export default App;
