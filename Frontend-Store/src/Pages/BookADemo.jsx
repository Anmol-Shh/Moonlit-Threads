import React, { useState } from "react"; 
import "../BookADemo.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomLoadingScreen from "../components/LoadingScreen"; // Assuming you have this component

const BookADemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    region: "",
    eventType: "",
    capacity: "",
    referralSource: "",
  });

  const [loading, setLoading] = useState(false); // New state for tracking form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setLoading(true); // Set loading to true while form is being submitted
    
    console.log("Form Submitted:", formData); 

    // Simulate API call or form processing
    setTimeout(() => {
      alert("Thank you! Your demo request has been submitted.");
      setLoading(false); // Reset loading state
      setFormData({ 
        firstName: "", 
        lastName: "", 
        companyName: "", 
        email: "", 
        phone: "", 
        region: "", 
        eventType: "", 
        capacity: "", 
        referralSource: "", 
      });
    }, 2000); // Simulate a delay, replace with actual API call if needed
  };

  if (loading) return <CustomLoadingScreen />; // Display the loading screen while submitting

  return (
    <>
      <Header />
      <div className="book-a-demo">
        <header className="demo-header">
          <h1>Let's Have A Chat ?</h1>
          <p>
            Connect with our team to discover how we can help you turn your thoughts into an apparel.
          </p>
        </header>

        <form className="demo-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="region">Region *</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Region</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="eventType">Event Type</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Event Type</option>
                <option value="Music Festival">Music Festival</option>
                <option value="Retreat">Retreat</option>
                <option value="Conference">Conference</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="referralSource">How did you hear about us?</label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Source</option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Referred by a friend">
                Referred by a Friend
              </option>
            </select>
          </div>

          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              SUBMIT →
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookADemo;
