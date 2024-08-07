import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dp text-white text-center py-6 mt-4">
            <p className="text-lg">&copy; 2024 Your Company Name. All rights reserved.</p>
            <div className="mt-4">
                <a href="#" className="mx-2 text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" className="mx-2 text-gray-400 hover:text-white">Terms of Service</a>
                <a href="#" className="mx-2 text-gray-400 hover:text-white">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;
