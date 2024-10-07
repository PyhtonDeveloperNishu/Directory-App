import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from  './componentes/Layout/Home'
import Retrieve from './componentes/Layout/Retrieve'
import './App.css'
import Header from './componentes/Layout/Header'


function App() {
  

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
    
    </Router>
  )
}

export default App
