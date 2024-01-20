import {Homepage,Searchpage} from './Pages/index';
import './App.css';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
  <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route path='/Search' element={<Searchpage/>}/>
    <Route path='/Search/:_id' element={<Searchpage/>}/>
  </Routes>
  );
}

export default App;
