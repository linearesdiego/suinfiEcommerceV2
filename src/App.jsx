import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
//components
import { Home } from './pages/Home';
import AuthLogin from './pages/auth/page';
import { NewProducto } from "./pages/NewProducto";
import ProductDetail from "./components/ProductDetail";
import { SearchGeneral } from "./pages/SearchGeneral";

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route path='/auth' element={<AuthLogin />} />
        <Route path='/newProduct' element={<NewProducto />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/SearchProduct' element={<SearchGeneral />} />
        {/*  <Route path='/newProduct' element={<Proveedores />} />
        
        
        <Route path='/profile' element={<AgregarComprobante />} />
        <Route path='/profile/account' element={<Plantillas />} />
        <Route path='/profile/security' element={<AgregarPlantilla />} /> */}

      </Routes>
    </Router>

  )
}

export default App
