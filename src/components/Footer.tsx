import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Partners Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Partners</h2>
            <p className="mb-2">Partner 1: Description about Partner 1.</p>
            <p className="mb-2">Partner 2: Description about Partner 2.</p>
            <p className="mb-2">Partner 3: Description about Partner 3.</p>
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">About Us</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Services</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Nairobi, Kenya</p>
            <p className="mb-2">Phone: +254 123 456 789</p>
            <div className="mt-4">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0000000000005!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE3JzMxLjUiUyAzNsKwNDknMTkuNiJF!5e0!3m2!1sen!2ske!4v1610000000000!5m2!1sen!2ske"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
