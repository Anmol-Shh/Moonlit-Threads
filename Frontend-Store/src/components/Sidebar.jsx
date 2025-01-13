import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../sidebar.css';

  const Sidebar = ({ isOpen, toggleSidebar, setCursorColor}) => {
    const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);
    const sidebarRef = useRef(null);
    const cursorRef = useRef(null); // Reference to the custom cursor
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          toggleSidebar();
        }
      }
  
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, toggleSidebar]);
  
    useEffect(() => {
      const handleMouseEnter = () => setCursorColor('darkbrown'); // Change to dark brown
      const handleMouseLeave = () => setCursorColor('white'); // Revert to white
  
      const sidebar = sidebarRef.current;
      if (sidebar) {
        sidebar.addEventListener('mouseenter', handleMouseEnter);
        sidebar.addEventListener('mouseleave', handleMouseLeave);
      }
  
      return () => {
        if (sidebar) {
          sidebar.removeEventListener('mouseenter', handleMouseEnter);
          sidebar.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, [setCursorColor]);

  

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className='close-btn' onClick={toggleSidebar}>x</button>
      <ul className='sidebar-list'>
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>

        {/* Categories with hover-based sub-menu */}
        <li
          onMouseEnter={() => setIsCategoriesHovered(true)} 
          onMouseLeave={() => setIsCategoriesHovered(false)}
        >
          <Link to="/shop" onClick={toggleSidebar}>Shop</Link>
          {/* Sub-sidebar */}
          {isCategoriesHovered && (
            <div className="sub-sidebar">
              <ul>
                <li><Link to="/shop/men" onClick={toggleSidebar}>Men</Link></li>
                <li><Link to="/shop/women" onClick={toggleSidebar}>Women</Link></li>
                <li><Link to="/shop/accesories" onClick={toggleSidebar}>Accesories</Link></li>
              </ul>
            </div>
          )}
        </li>
        <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
