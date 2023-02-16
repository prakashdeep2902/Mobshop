import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Products from './Component/Products';
import Singleroduct from './Component/Singleroduct';
import Cart from './Component/Cart';
import Header from './Component/Header/Header';
import Contact from './Component/contact/Contact';
import Footer from './Component/footer/Footer';
import ErrorPage from './Component/errorPage/ErrorPage';



function App() {

  return (
    <>


        <BrowserRouter>
          <Header />
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
          <Footer />
        </BrowserRouter>

    </>



  );
}

export default App;
