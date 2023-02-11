import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Products from './Component/Products';
import Contact from './Component/Contact';
import Singleroduct from './Component/Singleroduct';
import Cart from './Component/Cart';
import ErrorPage from './Component/ErrorPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/products' element={<Products />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/singleroduct/:id' element={<Singleroduct />}> </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/cart' element={<Cart />}> </Route>
          <Route path='*' element={<ErrorPage />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
