import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Menu from './menu';
import Sign from './sign';
import Login from './login';
import Admin from './admin';
import Addnew from './newpro';
import User from './user';
import Myorder from './myorder';
import Aorder from './orders';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
   <Menu/>
   <Routes>
   <Route path='/sign' element={<Sign/>}/>
   <Route path='/admin' element={<Admin/>}/>
   <Route path='/addpro' element={<Addnew/>}/>
   <Route path='/orderpro' element={<User/>}/>
   <Route path='/myorder' element={<Myorder/>}/>
   <Route path='/orders' element={<Aorder/>}/>



   <Route path='/login' element={<Login/>}/>

    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
