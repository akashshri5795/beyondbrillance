import { useState } from "react";
import logo from "../../assets/images/header-images/companyLogo.png";
import { Link } from "react-router-dom";
 
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
 
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMenuOpen(false); 
    };
 
    const tabList = [
        { name: "Home", path: "/" },
        { name: "Catalogue", path: "/catalogue" },
        { name: "For Schools", path: "/for-schools" },
        { name: "Series", path: "/series" },
        { name: "Resources", path: "/resources" },
        { name: "Contact", path: "/contact" },
    ];
 
    return (
        <nav className="w-full border-b-2 border-gray-200 fixed top-0 left-0 z-50 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
 
                {/* Logo */}
                <Link to="/" onClick={handleLinkClick} className="flex-shrink-0">
                    <div
                        className="w-36 sm:w-44 md:w-48 h-10 bg-contain bg-left bg-no-repeat"
                        style={{ backgroundImage: `url(${logo})` }}
                    />
                </Link>
 
                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex items-center gap-6 xl:gap-8">
                        {tabList.map((tab, i) => (
                            <li key={i}>
                                <Link
                                    to={tab.path}
                                    onClick={handleLinkClick}
                                    className="text-sm xl:text-base text-gray-700 font-medium hover:text-black transition duration-300"
                                >
                                    {tab.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
 
                {/* Desktop Buttons */}
                <div className="hidden lg:flex flex-shrink-0 items-center gap-3">
                    <button className="px-5 py-2.5 rounded-full bg-[#e8e3d7] text-gray-800 text-sm font-medium hover:bg-[#ddd6c8] hover:scale-105 transition duration-300">
                        Sign in
                    </button>
                    <button className="px-5 py-2.5 rounded-full bg-[#0b1220] text-white text-sm font-medium hover:bg-[#111827] hover:scale-105 transition duration-300 shadow-md">
                        Get started
                    </button>
                </div>
 
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
                >
                    <span className={`w-6 h-0.5 bg-black transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-6 h-0.5 bg-black transition ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`w-6 h-0.5 bg-black transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>
 
            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-6 border-t border-gray-100 bg-white">
                    <ul className="flex flex-col gap-4 pt-4">
                        {tabList.map((tab, i) => (
                            <li key={i}>
                                <Link
                                    to={tab.path}
                                    onClick={handleLinkClick}
                                    className="block text-gray-700 font-medium hover:text-black"
                                >
                                    {tab.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
 
                    {/* Mobile Buttons */}
                    <div className="flex flex-col gap-3 mt-6">
                        <button className="w-full px-6 py-3 rounded-full bg-[#e8e3d7] text-gray-800 text-sm font-medium">
                            Sign in
                        </button>
                        <button className="w-full px-6 py-3 rounded-full bg-[#0b1220] text-white text-sm font-medium shadow-md">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};