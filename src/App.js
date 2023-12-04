import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/Header/NavBar';
import Home from './component/Home/Home';
import Review from './component/Review/Review';
import DashBoard from './component/DashBoard/DashBoard';
import Blogs from './component/Bologs/Blogs';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
   <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/home' element ={<Home></Home> } />
    <Route path='/review' element={<Review></Review>} />
    <Route path='/dashboard' element={<DashBoard></DashBoard>} />
    <Route path='/blogs' element={<Blogs></Blogs>} />
    <Route path='/about' element ={<About></About>} />
    <Route path='*' element={<NotFound></NotFound>} />
   </Routes>

    </div>
  );
}

export default App;
