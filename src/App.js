import './App.css';
import {Route} from 'wouter';
import Nav from './pages/nav/index';
import SearchResponse from './pages/searchResults';
import Home from './pages/home';
import { GifsContextProvider } from './context/GifsContext';
import DetailGif from './pages/detail';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Nav />
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResponse} />
          <Route path="/gif/:id" component={DetailGif} />
          <Route path="/contact" component={Contact}/>
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
