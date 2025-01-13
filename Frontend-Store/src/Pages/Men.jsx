import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../mensCol.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomLoadingScreen from '../components/LoadingScreen'; // Import the custom loading component

const Shop = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true); // Create loading state
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:4000/images');
        const data = await response.json();
        setImages(data);  // Set images data after fetching
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false); // Set loading to false in case of error as well
      }
    };

    fetchImages();
  }, []);

  // Navigate to details page
  const handleArticleClick = (folder, idx) => {
    navigate(`/details/${folder}/${idx}`); // Pass folder and index as params
  };

  // If loading, show custom loading screen
  if (loading) {
    return <CustomLoadingScreen />;
  }

  return (
    <>
      <Header />
      <h3 id="colls">Men's Collection</h3>
      <div className="grid-container">
        {Object.keys(images).map((folder, index) => (
          <div key={index} className="folder-section">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{
                type: 'progressbar',
                clickable: true,
              }}
              loop={true}
              className="image-swiper"
            >
              {images[folder].map((imageUrl, idx) => (
                <SwiperSlide
                  key={idx}
                  onClick={() => handleArticleClick(folder, idx)} // Navigate on click
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={imageUrl}
                    alt={`Image from ${folder} ${idx}`}
                    className="product-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="folder-title">{folder}</div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
