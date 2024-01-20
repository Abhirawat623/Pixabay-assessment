import {Homepage,Searchpage} from './Pages/index';
import { Login } from './Components/index';
import './App.css';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
  <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route path='/Search' element={<Searchpage/>}/>
    <Route path='/Search/:_id' element={<Searchpage/>}/>
    <Route path='/auth/login' element={<Homepage/>}/>
  </Routes>
  );
}

export default App;
