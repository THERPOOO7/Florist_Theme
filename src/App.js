import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import NavbarOne from './Components/NavbarOne';
import About from './Pages/About';
import WhishlistPage from './Pages/WhishlistPage';
import PortfolioPage from './Pages/PortfolioPage';
import ShopDetailsPage from './Pages/ShopDetailsPage';
import BlogDetailsPage from './Pages/BlogDetailsPage';
import CartPage from './Pages/CartPage';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import CheckOutPage from './Pages/CheckOutPage';
import SearchComponents from './Components/SearchComponents';
import FooterOne from './Components/FooterOne';
import InstaComponent from './Components/InstaComponent';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <NavbarOne />
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route path='/wishlist' element={<WhishlistPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/shopdetails' element={<ShopDetailsPage />} />
          <Route path='/blogdetails' element={<BlogDetailsPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/SearchComponents' element = {<SearchComponents/>} />
        </Routes>
      <FooterOne/>
      </BrowserRouter>
    </div>
  );
}

export default App;

