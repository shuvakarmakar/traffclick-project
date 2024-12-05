import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Partner = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <div className="partner-section p-6 shadow-lg" id="partner">
            <h1
                className="text-2xl md:text-4xl font-bold text-white text-center p-7"
                data-aos="fade-up" 
            >
                Our Partners
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-8">
                {/* Affpaying Logo with Link */}
                <a
                    href="https://www.affpaying.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-right" 
                >
                    <img
                        src="/affpaying-logo.png"
                        alt="Affpaying Logo"
                        className="w-48 md:w-60 h-auto transition-transform transform hover:scale-105"
                    />
                </a>

                {/* Affplus Logo with Link */}
                <a
                    href="https://www.affplus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-left" // AOS animation for this logo
                >
                    <img
                        src="/affplus-logo-1-300x118.png"
                        alt="Affplus Logo"
                        className="w-48 md:w-60 h-auto transition-transform transform hover:scale-105"
                    />
                </a>
            </div>
        </div>
    );
};

export default Partner;
