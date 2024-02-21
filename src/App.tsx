import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { UserSettingsProvider } from './common/UserSettingsContext';
import StyledGlobalStyles from './GlobalStyles';
import ProjectPage from './pages/ProjectPage';
import Contact from './pages/Contact/Contact';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

ReactGA.initialize('G-KGT5LD5SZQ');

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <BrowserRouter>
        <UserSettingsProvider>
        <StyledGlobalStyles />
          <div className="App">
              <Header />
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/contact" Component={Contact} />
                <Route path="/projects/*" Component={ProjectPage} />
              </Routes>
              <Footer />
          </div>
        </UserSettingsProvider>
    </BrowserRouter>
  );
}

export default App;
