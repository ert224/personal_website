import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home';
import About from './components/About';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
    <Layout/>
    <Routes>
      <Route path="/" element={<Layout/>} />
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
