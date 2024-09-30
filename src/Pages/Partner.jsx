const Partner = () => {
    return (
        <div className="partner-section p-6">
            <h1 className="text-3xl font-bold text-white text-center mb-8">Our Partners</h1>
            <div className="flex justify-center space-x-8 items-center">
                {/* Affpaying Logo with Link */}
                <a href="https://www.affpaying.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/affpaying-logo.png"
                        alt="Affpaying Logo"
                        className="w-48 h-auto transition-transform transform hover:scale-105"
                    />
                </a>

                {/* Affplus Logo with Link */}
                <a href="https://www.affplus.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/affplus-logo-1-300x118.png"
                        alt="Affplus Logo"
                        className="w-48 h-auto transition-transform transform hover:scale-105"
                    />
                </a>
            </div>
        </div>
    );
};

export default Partner;
