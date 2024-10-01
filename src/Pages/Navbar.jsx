const NavBar = () => {
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="px-5 bg-gray-800 text-white">
            <div className="navbar">
                {/* Navbar Start - Logo */}
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">Traffclick</a>
                </div>

                {/* Navbar Center - Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <li>
                            <a onClick={() => handleScrollToSection("home")} className="font-bold uppercase">Home</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("partner")} className="font-bold uppercase">Our Partners</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("about")} className="font-bold uppercase">About Us</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("contact")} className="font-bold uppercase">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Navbar End - Login and Register Buttons */}
                <div className="navbar-end space-x-3">
                    <button className="btn btn-outline btn-success">Login</button>
                    <button className="btn btn-primary">Register</button>
                </div>

                {/* Mobile Menu */}
                <div className="dropdown lg:hidden navbar-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a onClick={() => handleScrollToSection("home")} className="font-bold uppercase text-black">Home</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("partners")} className="font-bold uppercase text-black">Our Partners</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("about")} className="font-bold uppercase text-black">About Us</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("contact")} className="font-bold uppercase text-black">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
