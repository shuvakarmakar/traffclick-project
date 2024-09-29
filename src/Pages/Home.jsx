import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
            <ContactForm></ContactForm>
        </div>

        // style={{ backgroundColor: '#001C30'}}
    );
};

export default Home;