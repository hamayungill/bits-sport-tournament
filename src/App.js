import Home from './components/home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Home/>
    </div>
  );
}

export default App;
