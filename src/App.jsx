import Home from './Pages/Home/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Archive from './Pages/Archive/Archive';
import Bin from './Pages/Bin/Bin';



function App() {
 

  return (
<<<<<<< HEAD
    <div className="App">
        <h1>This is a main branch code</h1>
    </div>
=======
    <>
       <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path="/archive" element={<Archive/>}></Route>
          <Route path="/bin" element={<Bin/>}></Route>
      </Routes>
      
    </>
    
>>>>>>> 939c67083f1ba894fc8f0b7a6d0f6d34655ffffb
  );
}

export default App;
