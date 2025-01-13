import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import usericon from '../assets/vuesax-linear-shop1.svg'
import usercart from '../assets/userIcon.svg'
import { useNavigate} from 'react-router';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const [cursorColor, setCursorColor] = useState('white');

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const naviagate=useNavigate()
  const handleClick = () => {
  naviagate('/cart')
  }
  const naviagate2=useNavigate()
  const handleClick2 = () => {
  naviagate2('/Login')
  }
  
  let navigate = useNavigate(); 
  const redirectToHome = () => { 
    navigate('/');
  }
  return (
    <>
      <nav className='bname mt-1 py-4 px-10 text-black flex justify-between items-center'>
        <button onClick={toggleSidebar} className='menu-btn ml-4 active:scale-90  ease-in-out duration-100'>
          {/* Button to toggle sidebar */}
          {isSidebarOpen ? 'Menu' : 'Menu'}
        </button>
        <h2 className='Moonlit-Threads' onClick={redirectToHome}>Moonlit Threads</h2>
        <div className='icons flex gap-10'>
          {/* <Link className='hover:scale-110 ease-in-out duration-200' to='/'>Home</Link>
          <Link className='hover:scale-110 ease-in-out duration-200' to='/about'>About</Link>
          <Link className='hover:scale-110 ease-in-out duration-200' to='/categories'>Categories</Link>
          <Link className='hover:scale-110 ease-in-out duration-200' to='/contact'>Contact</Link> */}
          <img className='' src={usericon} alt="" onClick={handleClick}/>
          <img className='' src={usercart} alt="" onClick={handleClick2}/>
        </div>
      </nav>
      
      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} setCursorColor={setCursorColor} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Header;
