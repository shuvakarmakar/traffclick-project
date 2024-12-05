import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Payoneer from '../../public/Payoneer.png';
import Wise from '../../public/Wise_Lo.png'
import Tether from '../../public/Tether.png';
import PerfectMoney from '../../public/perfect-money.png';

const PaymentMethod = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section
            className="payment-method-section p-6 mb-8 rounded-lg"
            id="payment"
        >
            {/* Section Title */}
            <h2
                className="text-2xl md:text-4xl font-bold text-white text-center p-7"
                data-aos="fade-up"
            >
                Our Payment Methods
            </h2>

            {/* Payment Logos Container */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mt-8">
                {/* Payoneer Logo */}
                <div className="payment-logo-container" data-aos="fade-right">
                    <img
                        src={Payoneer}
                        alt="Payoneer Logo"
                        className="w-40 md:w-48 h-auto transition-transform transform hover:scale-105 border border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg p-2"
                    />
                </div>

                {/* Wise Logo */}
                <div className="payment-logo-container" data-aos="fade-up">
                    <img
                        src={Wise}
                        alt="Wise Logo"
                        className="w-40 md:w-48 h-auto transition-transform transform hover:scale-105 border border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg p-2"
                    />
                </div>

                {/* Tether Logo */}
                <div className="payment-logo-container" data-aos="fade-down">
                    <img
                        src={Tether}
                        alt="Tether Logo"
                        className="w-40 md:w-48 h-auto transition-transform transform hover:scale-105 border border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg p-2"
                    />
                </div>

                {/* Perfect Money Logo */}
                <div className="payment-logo-container" data-aos="fade-left">
                    <img
                        src={PerfectMoney}
                        alt="Perfect Money Logo"
                        className="w-40 md:w-48 h-auto transition-transform transform hover:scale-105 border border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg p-2"
                    />
                </div>
            </div>
        </section>

    );
};

export default PaymentMethod;
