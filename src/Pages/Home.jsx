import ContactForm from "./ContactForm";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div style={{ backgroundColor: '#001C30'}}>
            <Navbar></Navbar>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;