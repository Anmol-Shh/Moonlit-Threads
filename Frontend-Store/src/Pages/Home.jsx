import React, { useLayoutEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import '../index.css';
import MainImg from '../assets/img1.avif';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import blaze1 from '../assets/blaze1prim.jpg';
import blaze2 from '../assets/blaze2.jpg';
import blaze4 from '../assets/blaze4.jpg';
import blaze1Sec from '../assets/blaze1-sec.jpg';
import blaze2Sec from '../assets/blaze2-sec.jpg';
import blaze4Sec from '../assets/blaze4-sec.jpg';
import zoomImg from '../assets/Rampwalk3.jpg';
import collection1 from '../assets/collectionsBurberry.webp';
import collection2 from '../assets/collectionsVersace.avif';
import collection3 from '../assets/collectionsBurberryMen.webp';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer.jsx'



gsap.registerPlugin(ScrollTrigger)

const Home = () => {

  const bg1 = useRef(null)
  const img_container = useRef(null)
  const img = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  const TextWomen = useRef(null)
  const TextMen = useRef(null)
  const colWomen = useRef(null)
  const colMen = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
      });
  
      // Creating timeline for image zoom and text animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img_container.current,
          pin: img_container.current,
          scrub: 2,
          start: "0% 0%",
          end: "+=2000px",
        },
      });
  
      // First half: image zooms in
      tl.to(img.current, { transform: "translateZ(200px)", duration: 1.5 })
  
      // Midway: text animations trigger
        .to(text1.current, { y: -800, duration: 1 }, "-=0.9")  // Starts in the middle of zoom
        .to(text2.current, { y: -800, duration: 1 }, "-=1")
      });
      
      
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the image section
      ScrollTrigger.create({
        trigger: colWomen.current,
        pin: colWomen.current,
        start: "top top",
        end: "bottom bottom",
      });
    });
  
    return () => ctx.revert();
  }, []);
  
  
 

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop'); // Navigate to categories page on logo click
  };

  return (
    <>
      <div className='w-screen'>
        <Header />
        <main>
          <img 
            className='w-screen' 
            src={MainImg} 
            alt="Logo" 
            onClick={handleClick} // Clickable logo to navigate to categories
          />
        </main>
        
        <section className="section-2 w-screen">
          <div className='flex justify-between gap-1 ml-4 mr-4 h-auto'>
            {/* Shop Section */}
            <div className="article-blaze">
              <Link className="link" to="/shop">SHOP</Link>
              <div className="image-container">
                <img 
                  className="default-image" 
                  src={blaze1} 
                  alt="Blaze Section" 
                />
                <img 
                  className="hover-image" 
                  src={blaze1Sec} 
                  alt="Blaze Section (hover)" 
                />
                <div className="overlay">
                  <div className="overlay-text">Shop</div>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="article-blaze">
              <Link className="link" to="/contact">CONTACT US</Link>
              <div className="image-container">
                <img 
                  className="default-image" 
                  src={blaze2} 
                  alt="Blaze Section" 
                />
                <img 
                  className="hover-image" 
                  src={blaze2Sec} 
                  alt="Blaze Section (hover)" 
                />
                <div className="overlay">
                  <div className="overlay-text">Contact Us</div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className='article-blaze'>
              <Link className="link" to="/about">ABOUT</Link>
              <div className="image-container">
                <img 
                  className="default-image" 
                  src={blaze4} 
                  alt="Blaze Section" 
                />
                <img 
                  className="hover-image" 
                  src={blaze4Sec} 
                  alt="Blaze Section (hover)" 
                />
                <div className="overlay">
                  <div className="overlay-text">About Us</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='section-3main'>
          <section ref={img_container} className ='section-3 perspective mt-16 flex justify-center h-screen w-screen items-center '>
            <img ref={img} className='image w-screen' src={zoomImg} alt="" />
            <div className='slide-image absolute text-white flex flex-col items-center justify-center'>
              <h1 ref={text1} className='text-[100px]'>
                <span className='text-stroke'>There's</span> Lot More
              </h1>
              <p ref={text2} className='opacity-50 text-[20px] text-center'>To meet your Luxurious Temptations</p>
            </div>
          </section>
        </div>
        <div id="collections" className="p-1">
          <div>
          <img 
            className="cols-image pb-1 col-span-2 w-screen h-screen object-cover" 
            src={collection1} 
            alt="" 
          />
          <div className="main-img text-overlay absolute top-0 w-full text-white text-[150px]">Winter Drop</div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div ref={colWomen}  className="relative">
              <img 
                className="cols-image pb-1 w-full h-screen object-cover" 
                src={collection2} 
                alt="" 
              />
              <div ref={TextWomen} className="grid-img absolute top-0 w-full text-center text-white text-2xl">Women's Collection</div>
            </div>
            <div ref={colMen} className="relative">
            <img 
              className="cols-image pb-1 w-full h-screen object-cover" 
              src={collection3} 
              alt="" 
            />
            <div ref={TextMen} className="grid-img absolute top-0 w-full text-center text-white text-2xl">Men's Collection</div>
            </div>
          </div>  
        </div>
      </div>
      <Footer/>
    </>
  );

};

export default Home;
