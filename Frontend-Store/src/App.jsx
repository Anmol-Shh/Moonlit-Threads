import React, { useEffect, useState } from 'react';  
import Home from './Pages/Home';
import './index.css';
import { Route, Routes, useLocation } from 'react-router';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import CustomCursor from './components/CustomCursor';
import Men from './Pages/Men';
import PrivateRoute from './Pages/PrivateRoute';
import BookADemo from './Pages/BookADemo';
import Login from './Pages/Login';
import { AuthProvider } from './context/AuthProvider';
import Register from './Pages/Register';
import ArticleDetails from './Pages/ArticleDetails';
const App = () => {
  const [loading, setLoading] = useState(true); // State to control loading screen
  const location = useLocation();  // Use useLocation to detect route changes

  const [cursorColor, setCursorColor] = useState('white');

  // Simulate a delay to showcase loading (e.g., an API call)
  const simulatePageLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Hide loading screen after a delay
    }, 1500); // Adjust time as needed
  };

  useEffect(() => {
    simulatePageLoad(); // Trigger loading on route change
  }, [location]); // Add location as a dependency to detect route changes

  return (
    <>
      {/* {loading && <LoadingScreen />}  */}
      <CustomCursor cursorColor={cursorColor} />
      {(
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/BookADemo' element={<BookADemo/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/shop/men' element={<Men/>} />
          <Route path="/cart" element={ 
            <PrivateRoute> 
              <Cart /> 
            </PrivateRoute> 
            } 
          /> 
          <Route path="/details/:folder/:idx" element={<ArticleDetails />} />
        </Routes>
      </AuthProvider>
      )}
    </>
  );
};

export default App;