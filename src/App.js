import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { AppProvider } from "./components/AppContext";
function App() {
  return (
    <div>
      <AppProvider>
          <Home />
      </AppProvider>
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
