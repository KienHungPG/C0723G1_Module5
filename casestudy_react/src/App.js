import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import NavScrollExample from './components/Navbar';
import { Footer } from './components/Footer';
import Room from './components/room/Room';

function App() {
  return (
    <>
    <NavScrollExample/>
    <Room/>
    <Footer/>
    </>
  );
}

export default App;
