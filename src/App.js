import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { pages } from './components/Items';
import Content from './components/Content';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header menu={pages} />
        <Content routes={pages} />
        <Footer />
      </Router>


    </div>
  );
}

export default App;
