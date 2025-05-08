import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
      <footer className="max-w-7xl mx-auto bg-gray-800 text-white py-12 footer-gb">
        <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Partners Column */}
          <div>

            <div className="flex space-x-4 mb-4">
              <img src="/dwh.png" alt="Image 1" className="h-12 w-35"/>
              <img src="/nascop.png" alt="Image 2" className="h-12 w-35"/>
            </div>
            <p className="mb-2">Welcome to the Kenya National Data Warehouse, your gateway to vital data solutions.
              Empowering decision makers, researchers, and the public, we drive innovation, enhance public health, and
              foster sustainable development.</p>
            <br/>
            <p className="mb-2">Discover how data can transform our nation.</p>
            <div className="mt-4">
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faFacebook} className="h-6 w-6"/>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faTwitter} className="h-6 w-6"/>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6"/>
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-blue-700">Home</a></li>
              <li><a href="#" className="text-white hover:text-blue-700">Apps</a></li>
              <li><a href="#" className="text-white hover:text-blue-700">Products</a></li>
              <li><a href="#" className="text-white hover:text-blue-700">Resources</a></li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <div className="mt-4">
              <iframe

                  src="https://www.google.com/maps?q=National+AIDS+and+STIs+Control+Program+(NASCOP)&output=embed"
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
