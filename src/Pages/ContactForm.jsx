import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div id="contact" className="min-h-screen p-10">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Us</h1>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-10">
                    {/* Left side: Contact Form */}
                    <div className="w-full lg:w-1/2 bg-sky-100 p-8 shadow-md rounded-lg mb-10 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-6 text-black">Send Us a Message</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    id="message"
                                    placeholder="Your Message"
                                    rows="5"
                                />
                            </div>
                            <button className="btn btn-primary w-full py-2">Submit</button>
                        </form>
                    </div>

                    {/* Right side: Social Media and Icons */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-semibold mb-6">Connect with Us</h2>

                        {/* Social Media Links with new design */}
                        <div className="flex flex-col sm:flex-row lg:flex-col items-center space-y-6 lg:space-y-4">
                            <a
                                href="https://facebook.com"
                                className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white transition-colors p-3 rounded-lg shadow-md w-full sm:w-auto"
                            >
                                <FaFacebookF className="mr-3 text-2xl" />
                                <span className="text-lg font-semibold">Facebook</span>
                            </a>
                            <a
                                href="https://twitter.com"
                                className="flex items-center text-gray-700 hover:bg-blue-400 hover:text-white transition-colors p-3 rounded-lg shadow-md w-full sm:w-auto"
                            >
                                <FaTwitter className="mr-3 text-2xl" />
                                <span className="text-lg font-semibold">Twitter</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="flex items-center text-gray-700 hover:bg-blue-700 hover:text-white transition-colors p-3 rounded-lg shadow-md w-full sm:w-auto"
                            >
                                <FaLinkedinIn className="mr-3 text-2xl" />
                                <span className="text-lg font-semibold">LinkedIn</span>
                            </a>
                            <a
                                href="https://instagram.com"
                                className="flex items-center text-gray-700 hover:bg-pink-600 hover:text-white transition-colors p-3 rounded-lg shadow-md w-full sm:w-auto"
                            >
                                <FaInstagram className="mr-3 text-2xl" />
                                <span className="text-lg font-semibold">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
