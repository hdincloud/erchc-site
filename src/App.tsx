import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, AlertTriangle, ChevronRight, ChevronDown, Building2, Hotel, Cast as Casino } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Building2 size={32} className="text-gold-400" />
        <Hotel size={24} className="absolute bottom-0 left-0 text-gold-400" />
        <Casino size={24} className="absolute bottom-0 right-0 text-gold-400" />
      </div>
      <span className="text-2xl font-bold text-gold-400">RIVER CITY</span>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const mailtoLink = `mailto:customercare@ERCHC.xyz?subject=New Inquiry: ${inquiryType}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AInquiry Type: ${inquiryType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoLink;
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setInquiryType('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-gold-400" />
              <span className="text-sm">1-800-LUXURY</span>
              <span className="mx-2">|</span>
              <Mail size={18} className="text-gold-400" />
              <span className="text-sm">customercare@ERCH.xyz</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Clock size={18} className="text-gold-400" />
              <span className="text-sm">Open 24/7</span>
            </div>
          </div>
          <nav className="py-6">
            <div className="flex justify-between items-center">
              <Logo />
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-white hover:text-gold-400 transition-colors">Home</a>
                <a href="#hotel" className="text-white hover:text-gold-400 transition-colors">Hotel</a>
                <a href="#casino" className="text-white hover:text-gold-400 transition-colors">Casino</a>
                <a href="#dining" className="text-white hover:text-gold-400 transition-colors">Dining</a>
                <a href="#contact" className="text-white hover:text-gold-400 transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 space-y-4">
                <a href="#" className="block text-white hover:text-gold-400 transition-colors">Home</a>
                <a href="#hotel" className="block text-white hover:text-gold-400 transition-colors">Hotel</a>
                <a href="#casino" className="block text-white hover:text-gold-400 transition-colors">Casino</a>
                <a href="#dining" className="block text-white hover:text-gold-400 transition-colors">Dining</a>
                <a href="#contact" className="block text-white hover:text-gold-400 transition-colors">Contact</a>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-48"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-bold mb-6">Experience Luxury & Excitement</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Where opulent accommodations meet world-class gaming in an atmosphere of unparalleled elegance.
          </p>
          <div className="space-x-4">
            <button className="bg-gold-400 hover:bg-gold-500 text-gray-900 font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors">
              Book Your Stay
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors">
              Gaming Floor
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="text-gold-400 mr-3" size={24} />
                      <div>
                        <p className="font-semibold">Call Us</p>
                        <p>1-800-LUXURY</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-gold-400 mr-3" size={24} />
                      <div>
                        <p className="font-semibold">Email Us</p>
                        <p>customercare@ERCH.xyz</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-gold-400 mr-3" size={24} />
                      <div>
                        <p className="font-semibold">Visit Us</p>
                        <p>11762 106 St, Edmonton, AB T5G 2R1</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="h-64 bg-gray-200 rounded-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.2889561562897!2d-113.50774782346277!3d53.56430997231757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580b4f4bd%3A0x411fa3c4e64db462!2s11762%20106%20St%20NW%2C%20Edmonton%2C%20AB%20T5G%202R1!5e0!3m2!1sen!2sca!4v1710644433444!5m2!1sen!2sca"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                    <div className="relative">
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent appearance-none"
                        required
                      >
                        <option value="">Select an option</option>
                        <optgroup label="Hotel">
                          <option value="room-reservation">Room Reservation</option>
                          <option value="amenities">Amenities Information</option>
                          <option value="special-requests">Special Requests</option>
                        </optgroup>
                        <optgroup label="Casino">
                          <option value="gaming">Gaming Information</option>
                          <option value="promotions">Casino Promotions</option>
                          <option value="vip">VIP Services</option>
                        </optgroup>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold-400 hover:bg-gold-500 text-gray-900 font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-colors"
                  >
                    Send Message
                    <ChevronRight className="ml-2" size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-4 max-w-4xl mx-auto">
            <AlertTriangle className="text-gold-400 flex-shrink-0" size={24} />
            <div className="text-sm">
              <p className="font-semibold mb-2">Responsible Gaming Notice</p>
              <p>
                Must be 21 or older to enter the casino floor or participate in gaming activities. 
                Gambling can be addictive. Please play responsibly. If you or someone you know has a gambling problem, 
                help is available 24/7. Call 1-800-522-4700 for confidential help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold-400">River City Hotel & Casino</h3>
              <p className="text-gray-400">
                Where luxury meets excitement. Experience world-class gaming and unparalleled hospitality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hotel</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Accommodations</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Amenities</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Dining</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Spa & Wellness</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Casino</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Gaming Floor</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Promotions</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Players Club</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">VIP Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Responsible Gaming</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">House Rules</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} River City Hotel & Casino. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
