import React, { useEffect, useRef } from 'react';

function Navbar() {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const navbar = navbarRef.current;

    const handleMenuIconClick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    menuIcon.addEventListener('click', handleMenuIconClick);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
          });
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
      
      // Reset the menu icon and navbar
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      menuIcon.removeEventListener('click', handleMenuIconClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">WebDev</a>
      <i className='bx bx-menu' id="menu-icon" ref={menuIconRef}></i>
      <nav className="navbar" ref={navbarRef}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#career">Career</a>
        <a href="#tools">Tools</a>
      </nav>
    </header>
  );
}

export default Navbar;
