import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Payoneer from '../../public/Payoneer.png';
import Wise from '../../public/Wise_Lo.png'
import Tether from '../../public/Tether.png';
import PerfectMoney from '../../public/perfect-money.png';

const PaymentMethod = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration
    }, []);

    return (
        <div className="payment-method-section p-6" id="payment">
            <h2
                className="text-2xl md:text-4xl font-bold text-white text-center mb-8"
                data-aos="fade-up"
            >
                Our Payment Methods
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Payoneer Logo with AOS */}
                <div data-aos="fade-right">
                    <img
                        src={Payoneer}
                        alt="Payoneer Logo"
                        className="w-40 md:w-48 h-auto transition-transform transform hover:scale-105 border border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg p-2"
                    />
                </div>

                {/* Wise Logo with AOS */}
                <div data-aos="fade-up">
                    <img
                        src={Wise}
                        alt="Wise Logo"
                        className="w-40 md:w-48 h-auto transition-transform transform hover:scale-105 border border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg p-2"
                    />
                </div>

                {/* Tether Logo with AOS */}
                <div data-aos="fade-down">
                    <img
                        src={Tether}
                        alt="Tether Logo"
                        className="w-40 md:w-48 h-auto transition-transform transform hover:scale-105 border border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg p-2"
                    />
                </div>

                {/* Perfect Money Logo with AOS */}
                <div data-aos="fade-left">
                    <img
                        src={PerfectMoney}
                        alt="Perfect Money Logo"
                        className="w-40 md:w-48 h-auto transition-transform transform hover:scale-105 border border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg p-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
