
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import Orders from './Pages/Dashboard/Orders';
import Payment from './Pages/Dashboard/Payment';
import Review from './Pages/Dashboard/Review';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/explore' element={ <Explore /> }></Route>
       
        <Route path='/orders' element={ 
          <RequireAuth>
            <Orders />
          </RequireAuth>
         }></Route>
        <Route path='/review' element={
          <RequireAuth>
            <Review />
          </RequireAuth>
         }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
          {/* <Route index element={<Dashboard></Dashboard>}></Route> */}
          <Route path='payment' element={<Payment></Payment>}></Route>
          <Route path='orders' element={<Orders></Orders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
        </Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>          
        }>
        </Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
