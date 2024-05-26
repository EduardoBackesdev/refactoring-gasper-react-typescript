import { Provider } from 'react-redux';
import './App.css';
import {Main} from './components/main/main';
import {Login} from './components/main/login'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/sistema' element={<Main/>} />
    </Routes>
  );
}

export default App;
