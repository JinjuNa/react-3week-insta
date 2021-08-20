import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import List from './pages/List';
import UserList from './pages/UserList';
import User from './pages/User';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/user_list" component={UserList} />
        <Route path="/user/:id" component={User} />
      </BrowserRouter>
    </div>
  );
}
export default App;
