import './App.css';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home';
import Alla from './pages/Alla';
import Pikachu from './pages/Pikachu';
import { Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
      <GlobalStyles />
      <Navbar />

      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/alla" component={Alla} />

        <Route exact path="/pikachu" component={Pikachu} />
        
      </Switch>
    </>
    );
}

export default App;
