import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main';
import AboutUs from './components/AboutUs';
import AboutTheProject from './components/AboutTheProject';
import NewCities from './components/NewCities';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/about-the-project' element={<AboutTheProject />} />
        <Route path='/register-city' element={<NewCities />}/>
      </Routes>
    </div>
  );
}

export default App;
