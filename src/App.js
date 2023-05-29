import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Components/Navi';
import About from './Page/About';
import Registration from './Page/Registration';
import Login from './Page/Login';
import Home from './Page/Home';
import Registered from './Page/Registered';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/aboutUS' element = {<About/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/registration' element = {<Registration/>} /> 
        <Route path='/registered' element = {<Registered/>} /> 
        <Route path='/welcome' element = {<Welcome/>} />
      </Routes>
    </div>
  );
}

export default App;
