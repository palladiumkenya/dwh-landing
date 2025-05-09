import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div>
        <div className="max-w-7xl mx-auto bg-gray-800 text-white py-12 footer-gb">
            <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>

                    <div className="flex space-x-4 mb-4">
                        <img src="/dwh.png" alt="Image 1" className="h-12 w-35"/>
                        <img src="/nascop.png" alt="Image 2" className="h-12 w-35"/>
                    </div>
                    <p className="mb-2">Welcome to the Kenya National Data Warehouse, your gateway to vital data
                        solutions.
                        Empowering decision makers, researchers, and the public, we drive innovation, enhance public
                        health, and
                        foster sustainable development.</p>
                    <br/>
                    <p className="mb-2">Discover how data can transform our nation.</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Useful Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-white hover:text-blue-700">Home</a></li>
                        <li><a href="#products" className="text-white hover:text-blue-700">Apps</a></li>
                        <li><a href="https://nascop.org" className="text-white hover:text-blue-700">Resources</a></li>
                    </ul>
                </div>


                <div>
                    <h2 className="text-xl font-bold mb-4">Address</h2>
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps?q=National+AIDS+and+STIs+Control+Program+(NASCOP)&output=embed"
                            width="100%"
                            height="200">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
