import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import UserList from './components/UserList';
import Profil from './components/Profil'

function App() {
        return (
        <Router>
        <div className="App">
        <NavBar/><br/><br/><br/>
        <Switch>
          <Route  exact path="/" component={UserList} />
          <Route path="/Liste">
          <UserList/>
        </Route>
        <Route path="/Profile/:userId">
          <Profil/>
        </Route>
        </Switch>
        </div>
        </Router>
      );
}

export default App;
