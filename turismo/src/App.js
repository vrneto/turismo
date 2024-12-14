import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Verifique a estrutura do diretório e os caminhos das páginas
import Home from './components/Content/Home'; 
import Statistics from './components/Content/Statistics'; 
import Users from './components/Content/Users'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-layout">
          
          <div className="content-area"> 
            <Routes>
              {/* Caminhos agora com barra (/) para rotas absolutas */}
              <Route path="/home" element={<Home />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
