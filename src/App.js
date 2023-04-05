import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './componentes/RestaurantDetails';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<RestaurantDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
