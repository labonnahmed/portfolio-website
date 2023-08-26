import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaseStudy from './components/caseStudy/CaseStudy/CaseStudy';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/caseStudy/:id' element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
