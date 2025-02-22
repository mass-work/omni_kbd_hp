import styled from 'styled-components';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buildguide" element={<BuildGuide />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HashRouter>
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