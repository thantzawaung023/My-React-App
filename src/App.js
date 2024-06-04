import React, { useState , useEffect } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import ShareLayout from './components/ShareLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Users from './pages/User';
import Products from './pages/Products';
import Login from './pages/Login';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';



const App = (prop)=>{
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log('user',{user})
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShareLayout/>} >
              <Route index element={<Home/>} />
              {/* <Route path='users' element={<Users/>} /> */}
              <Route path='products' element={<Products/>} />
              <Route path='products/:productId' element={<ProductDetail/>} />
              <Route path='dashboard' element={
              <ProtectedRoute user={user} >
                <Dashboard user={user} />
              </ProtectedRoute>
              } >
                  <Route path='users' element={<Users/>} />
              </Route>
              <Route path='login' element={<Login setUser={setUser} />} />
              <Route path='*' element={<Error/>} />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
     
    );
  

}

export default App;