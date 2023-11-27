import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';


// Documentação ReactStrap: https://reactstrap.github.io/


function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Row>
          {/* Aqui vai o Navbar */}
          <Menu />

        </Row>

        <Row>
          {/* Aqui vai o conteúdo (rotas do site) */}
          <Col>
          {/* Rotas */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cardapio" element={<Cardapio />} />
            <Route exact path="/contato" element={<Contato />} />
          </Routes>
          
          </Col>
        </Row>

      </BrowserRouter>

      <Row>
        {/* Aqui vai o rodapé */}
        <Rodape />
      </Row>
    </Container >
  );
}
export default App;
