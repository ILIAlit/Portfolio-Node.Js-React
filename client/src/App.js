import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import "./styles/style.css";
import Header from './components/header/Header';
import ScrollToTop from './helpers/scrollToTop';
import BtnUp from './components/btnUp/BtnUp';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AppRouter />
        <BtnUp />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
