import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const adminLinks = [
    { to: '/admin/managementHome', label: 'Home' },
    { to: '/admin/managementProducts', label: 'Product' },
    { to: '/admin/managementNews', label: 'News' },
    { to: '/admin/managementAbout', label: 'About' },
    { to: '/admin/managementContact', label: 'Contact' },
];

const HeaderAdmin: React.FC = () => {
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("admin_logged_in");
        window.location.href = "/";
    };

    return (
        <header className="bg-[#23272e] shadow-md sticky top-0 z-30 w-full">
            <nav className="container mx-auto px-2 sm:px-4 md:px-6 flex items-center py-2 md:py-3 justify-between">
                <div className="flex gap-0.5 sm:gap-2 md:gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent w-0 flex-1 min-w-0">
                    {adminLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded font-semibold transition-colors duration-150 text-xs sm:text-sm md:text-lg whitespace-nowrap
                                ${location.pathname === link.to
                                    ? 'bg-[#77b843] text-white shadow'
                                    : 'text-gray-200 hover:bg-[#2d3748] hover:text-[#77b843]'}
                            `}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button
                    onClick={handleLogout}
                    className="ml-1 sm:ml-2 md:ml-4 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-2 sm:px-2.5 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full font-bold shadow transition-all duration-150 border-2 border-transparent hover:border-white text-xs sm:text-sm md:text-base shrink-0"
                >
                    Đăng xuất
                </button>
            </nav>
        </header>
    );
};

export default HeaderAdmin;