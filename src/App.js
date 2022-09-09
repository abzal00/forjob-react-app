import './App.css';
import Headers from './components/Header/Header';
import UsersContainer from './components/Users/UsersContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './components/Navs/Navs';
import { Route, Routes, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';

function App() {
  return (

    <div className="App">

      <Headers />
      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path='users' element={<UsersContainer />} />
      </Routes>









    </div>

  );
}

export default App;
