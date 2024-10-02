import image from '../../public/Image-marketing.jpg';

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
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Traffclick</h1>
                    <p className="mb-5">
                        Join the world's leading affiliate network and take your business to the next level. Get connected with top-tier partners and grow your revenue effortlessly.
                    </p>
                    <button className="btn btn-primary text-lg font-semibold" onClick={() => handleScrollToSection("partner")}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
