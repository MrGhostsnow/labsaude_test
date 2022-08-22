import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Empresas from './views/Empresas/Empresas';
import { Routes, Route } from "react-router-dom";
import Usuarios from './views/Usuarios/Usuarios';
import Profissionais from './views/Profissionais/Profissionais';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Empresas/>}/>
    <Route path='/usuarios' element={<Usuarios/>}/>
    <Route path='/profissionais' element={<Profissionais/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
