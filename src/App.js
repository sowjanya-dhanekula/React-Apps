import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import {Nav_menu} from './Nav_Menu/Nav_menu'
import {Footer} from './Footer/Footer'

function App() {
  return (
    <div className="App">
     <Header />
     <Nav_menu />
     <Footer />
    </div>
  );
}

export default App;
