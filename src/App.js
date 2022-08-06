import NavBar from './components/Layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/scss/app.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import AnimatedRoutes from './components/Layout/AnimatedRoutes';
import { motion } from 'framer-motion';
function App() {
  return (
    <div className="App">
        <NavBar />
        <Container>
            <Row className="main-row">
                <Col xs={12} sm={12} md={4} lg={4}>
                  <motion.div
                    initial={{
                          x: "-50%",
                          opacity:0,
                          scale:0.5,                          
                      }} 
                      animate={{
                          x: 0,
                          opacity:1,
                          scale:1,
                          transition:{duration:0.5}                          
                      }} 
                    >
                    <Sidebar />
                  </motion.div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8}>
                  <div className="content-card-container">
                    <AnimatedRoutes />
                  </div>
                </Col>
            </Row>
        </Container>
    </div> 
  );
}
export default App;