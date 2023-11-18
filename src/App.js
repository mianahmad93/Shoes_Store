import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Products from './components/Products/Products';
import Womens from './components/Womens/Womens';
import Mens from './components/Mens/Mens';
import Kids from './components/Kids/Kids';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import ProductsDetail from './components/ProductsDetail/ProductsDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './Store/Store';
import { Provider } from 'react-redux'


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Provider store={Store}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Slider />} />
            <Route path='/product' element={<Products />} />
            <Route path='/mens' element={<Mens />} />
            <Route path='/womens' element={<Womens />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/productdetail/:id' element={<ProductsDetail />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
