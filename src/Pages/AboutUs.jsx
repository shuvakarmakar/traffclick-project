import myImages from '../../public/Banner.jpg'

const AboutUs = () => {
    return (
        <div className="about-us-section flex flex-col md:flex-row items-center md:items-start md:space-x-8 p-6" id='about'>
            <div className="banner-container md:w-1/2 mb-6 md:mb-0">
                <img 
                    src={myImages} 
                    alt="Traffclick Affiliate Network" 
                    className="w-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="content-container md:w-1/2 space-y-6 md:text-left text-center">
                <h1 className="text-4xl font-bold text-primary">About Traffclick Affiliate Network</h1>
                <p className="text-lg text-teal-400 text-justify">
                    Welcome to Traffclick, a dynamic and innovative affiliate network designed to help 
                    businesses thrive in the digital landscape. With a focus on delivering measurable 
                    results, we connect advertisers with skilled affiliates, creating a powerful 
                    ecosystem that drives growth, performance, and success for all.
                </p>
                <p className="text-lg text-teal-400 text-justify">
                    Our mission is simple: empower businesses by providing access to top-tier 
                    affiliates, while offering transparent tracking, competitive payouts, and 
                    cutting-edge tools to ensure seamless collaboration. Whether you’re an advertiser 
                    looking to expand your reach or an affiliate seeking profitable opportunities, 
                    Traffclick is your partner in success.
                </p>
                <p className="text-lg text-teal-400 text-justify">
                    We pride ourselves on maintaining a high standard of integrity, quality service, 
                    and strong relationships within the affiliate marketing community. With years of 
                    experience and a global reach, Traffclick is positioned to help you unlock new 
                    growth potential.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;

