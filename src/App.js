import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';



import Header from './Component/Header/Header';
import Contact from './Component/contact/Contact';
import Footer from './Component/footer/Footer';
import ErrorPage from './Component/errorPage/ErrorPage';
import Singleroduct from './Component/singlepage/Singleroduct';
import Products from './Component/products/Products';
import Cart from './Component/Cart/Cart';



function App() {

  return (
    <>
   

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/products' element={<Products/>}> </Route>
            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='/singleroduct/:id' element={<Singleroduct/>}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/cart' element={<Cart/>}> </Route>
            <Route path='*' element={<ErrorPage />}> </Route>
          </Routes>
          <Footer />
        </BrowserRouter>

    </>



  );
}

export default App;
