
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Orders from './Pages/Dashboard/Orders';
import Payment from './Pages/Dashboard/Payment';
import Review from './Pages/Dashboard/Review';
import Users from './Pages/Dashboard/Users';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
const queryClient= new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path='manageOrders' element={
            <RequireAdmin>
                <ManageAllOrders />
            </RequireAdmin>
          }></Route>
          <Route path='addProduct' element={
            <RequireAdmin>
                <AddProduct />
            </RequireAdmin>
           }></Route>
          <Route path='users' element={
            <RequireAdmin>
                <Users></Users>
            </RequireAdmin>
           }></Route>
          <Route path='manageProducts' element={
            <RequireAdmin>
                <ManageProducts /> 
            </RequireAdmin>
          }></Route>
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
        <ToastContainer />
    </div>
      
    </QueryClientProvider>
  );
}

export default App;
