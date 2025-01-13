import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ArticleDetails.css';
import CustomLoadingScreen from '../components/LoadingScreen';

const ArticleDetails = () => {
  const { folder, idx } = useParams();
  const [article, setArticle] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/article-details/${folder}/${idx}`);
        const data = await response.json();

        if (data) {
          setArticle(data);
          setMainImage(data.images[0]); // Set the first image as default main image
        } else {
          setError('Article not found');
        }
      } catch (error) {
        console.error('Error fetching article details:', error);
        setError('Failed to load article details');
      }
    };

    fetchArticleDetails();
  }, [folder, idx]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!article) return <CustomLoadingScreen />;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  const handleAddToCart = () => {
    alert(`Added to cart: ${article.title}, Size: ${selectedSize || 'Not Selected'}`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size before proceeding.');
    } else {
      alert(`Proceeding to checkout: ${article.title}, Size: ${selectedSize}`);
    }
  };

  return (
    <div className="article-details-container">
      <div className="image-section">
        <div className="main-image-container">
          <img src={mainImage} alt="Main Article" className="main-image" />
        </div>
        <div className="thumbnail-section">
          {article.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${mainImage === img ? 'active-thumbnail' : ''}`}
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </div>
      </div>

      <div className="details-section">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-description">{article.description}</p>
        <p className="article-price">${article.price}</p>

        <div className="size-selection">
          <p className="size-label">Select Size:</p>
          <div className="size-buttons">
            {article.sizes.map((size, index) => (
              <button
                key={index}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="actions">
          <button className="btn add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn buy-now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
