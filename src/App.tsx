import styled from 'styled-components';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BuildGuide from './pages/BuildGuide';

function App() {
  return (
    <Container>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/build-guide" element={<BuildGuide />} />
        </Routes>
      </MainContent>
      <Footer />
    </Container>
  );
}

export default App;
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  color: #333;
`;

const MainContent = styled.main`
  flex-grow: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;