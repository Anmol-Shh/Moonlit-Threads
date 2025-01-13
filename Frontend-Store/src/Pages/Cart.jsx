import React, { useState, useEffect } from 'react';
import '../CartPage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CustomLoadingScreen from '../components/LoadingScreen'; // Assuming you have this component

const CartPage = () => {
  const [cartItems, setCartItems] = useState(null); // State to hold cart items
  const [loading, setLoading] = useState(true); // Loading state to manage data fetching

  useEffect(() => {
    // Simulate fetching cart data
    const fetchCartData = async () => {
      setLoading(true); // Set loading to true while fetching cart data
      try {
        // Simulate API call
        const response = await fetch('http://localhost:4000/cart'); // Adjust API URL as needed
        const data = await response.json();
        setCartItems(data); // Set cart items data once fetched
      } catch (error) {
        console.error('Error fetching cart data:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchCartData(); // Fetch cart data when the component mounts
  }, []);

  if (loading) return <CustomLoadingScreen />; // Display loading screen while fetching cart data

  return (
        <>
        <div className="cart-page">
            <Header/>
            <main>
                <section className="cart-items">
                    <h2>SHOPPING CART</h2>
                    <div className="item">
                        <img src="path/to/trousers.jpg" alt="Camille Henrot Artwork Trousers" />
                        <div className="item-details">
                            <p>Camille Henrot Artwork Trousers</p>
                            <p>Price: 1,150.00€</p>
                            <p>Size: 36</p>
                            <p>Color: White</p>
                            <p>Quantity: 1</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="path/to/shirt.jpg" alt="Camille Henrot Artwork Shirt" />
                        <div className="item-details">
                            <p>Camille Henrot Artwork Shirt</p>
                            <p>Price: 1,250.00€</p>
                            <p>Size: 36</p>
                            <p>Color: Black</p>
                            <p>Quantity: 3</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="path/to/top.jpg" alt="Camille Henrot Artwork Top" />
                        <div className="item-details">
                            <p>Camille Henrot Artwork Top</p>
                            <p>Price: 495.00€</p>
                            <p>Size: 36</p>
                            <p>Color: Black</p>
                            <p>Quantity: 2</p>
                        </div>
                    </div>
                </section>
                <section className="order-summary">
                    <h2>ORDER SUMMARY</h2>
                    <p>Subtotal: 5,890.00€</p>
                    <p>Shipping: Free</p>
                    <p>Postage: 24.00€</p>
                    <h3>Total: 5,914.00€</h3>
                    <button>Check Out</button>
                </section>
                <section className="new-arrivals">
                    <h2>NEW ARRIVALS</h2>
                    <div className="new-item">
                        <img src="path/to/tank-top.jpg" alt="Technical Nylon Wide Tank Top" />
                        <p>Technical Nylon Wide Tank Top - 790.00€</p>
                    </div>
                    <div className="new-item">
                        <img src="path/to/parka.jpg" alt="Oversized Technical Nylon Parka" />
                        <p>Oversized Technical Nylon Parka - 1,490.00€</p>
                    </div>
                    <div className="new-item">
                        <img src="path/to/turtleneck.jpg" alt="Silk Turtleneck Top" />
                        <p>Silk Turtleneck Top - 650.00€</p>
                    </div>
                </section>
            </main>
        </div>
        <Footer/>
        </>
    );
};

export default CartPage;
