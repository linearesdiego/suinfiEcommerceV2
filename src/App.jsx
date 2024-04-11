import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//components
import { Home } from './pages/Home';
import AuthLogin from './pages/auth/page';
import { NewProducto } from './pages/NewProducto';
import ProductDetail from './components/ProductDetail';
import { SearchGeneral } from './pages/SearchGeneral';
import { Account } from './components/profile/Account';
import { Profile } from './pages/Profile/Profile';
import { AccountPage } from './pages/Profile/AccountPage';
import { Security } from './pages/Profile/Security';
import { Card } from './pages/Profile/Card';
import { YourProductsPage } from './pages/YourProductsPage';
import Policies from './pages/Policies';
import { CreatedPublic } from './pages/CreatedPublic';
import { ProductsForCategory } from './pages/ProductsForCategory';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLogin />} />
        <Route path="/newProduct" element={<NewProducto />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/SearchProduct" element={<SearchGeneral />} />
        <Route path="/profile/account" element={<AccountPage />} />
        <Route path="/profile/security" element={<Security />} />
        <Route path="/profile/cards" element={<Card />} />
        <Route path="/yourProducts" element={<YourProductsPage />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/createdPublic" element={<CreatedPublic />} />
        <Route
          path="/productsForCategory/:id"
          element={<ProductsForCategory />}
        />
        {/*  <Route path='/newProduct' element={<Proveedores />} />
        
        
        <Route path='/profile' element={<AgregarComprobante />} />
        <Route path='/profile/account' element={<Plantillas />} />
        <Route path='/profile/security' element={<AgregarPlantilla />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
