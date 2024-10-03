import image from '../../public/Image-marketing.jpg';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className="hero h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg text-white">
                    {/* Typewriter Effect in the Heading */}
                    <TypeAnimation
                        sequence={[
                            'Welcome to Traffclick', 1000,  // Display this text for 1 second
                            'Grow Your Business with Us', 2000,  // Then change to this text for 2 seconds
                            'Partner with the Best Affiliates', 3000,  // Another text for 3 seconds
                        ]}
                        wrapper="h1"
                        cursor={true}
                        repeat={Infinity}
                        className="mb-5 text-5xl font-bold"
                    />

                    <p className="mb-5">
                        Join the world's leading affiliate network and take your business to the next level. Get connected with top-tier partners and grow your revenue effortlessly.
                    </p>
                    <button className="btn  btn-warning text-lg font-semibold" onClick={() => handleScrollToSection("partner")}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
