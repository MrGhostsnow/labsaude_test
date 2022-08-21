import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Empresas from './views/Empresas/Empresas';
import { Routes, Route } from "react-router-dom";
import Usuarios from './views/Usuarios/Usuarios';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/empresas' element={<Empresas/>}/>
    <Route path='/usuarios' element={<Usuarios/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
