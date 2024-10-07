import AboutUs from "./AboutUs";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Partner from "./Partner";
import PaymentMethod from "./PaymentMethod";

const Home = () => {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Partner></Partner>
            <PaymentMethod></PaymentMethod>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>

        // style={{ backgroundColor: '#001C30'}}
    );
};

export default Home;