
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './pages/components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          
          <Header/>

         <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>

            </Routes>
         
        </div>
      </Router>
      <ToastContainer/>
     
    </>
  );
}

export default App;
