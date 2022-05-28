import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Recipeentry from './component/Recipeentry';
import Search from './component/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>

    <Route path="/" exact element={<Recipeentry/>}/>
    <Route path="/search" exact element={<Search/>}/>


  </Routes>
  
  
  </BrowserRouter>
    
    
    </>

  );
}

export default App;
