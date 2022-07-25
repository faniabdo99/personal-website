import NavBar from './components/Layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/scss/app.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import About from './components/Pages/About';
import Resume from './components/Pages/Resume';
function App() {
  return (
    <div className="App">
      <NavBar />
        <Container>
            <Row>
                <Col xs={4}>
                    <Sidebar />
                </Col>
                <Col xs={8}>
                  <div className="content-card-container">
                    <Routes>
                      <Route path="/" element={<About />} />
                      <Route path="/resume" element={<Resume />} />
                    </Routes>
                  </div>
                </Col>
            </Row>
        </Container>
    </div> 
  );
}
export default App;