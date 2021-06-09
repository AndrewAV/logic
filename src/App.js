import './App.css';
import Menu from './components/Menu';
import Sentence from './components/Sentence';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="body">
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/:index" component={Sentence} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
