import AboutUs from "./AboutUs";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import Partner from "./Partner";

const Home = () => {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Partner></Partner>
            <ContactForm></ContactForm>
        </div>

        // style={{ backgroundColor: '#001C30'}}
    );
};

export default Home;