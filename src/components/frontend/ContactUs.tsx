import React, { useState } from 'react';
import { AiOutlineWhatsApp } from "react-icons/ai";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        query: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // You can add any additional functionality here if needed
        console.log('Form submitted', formData);
        alert('Your query has been submitted successfully.');
        setFormData({
            name: '',
            email: '',
            mobile: '',
            query: '',
        });
    };

    const contactUsThroughWhatsApp = () => {
        const phoneNumber = formData.mobile; // Get the entered phone number
        const message = `Hello, I have a query:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nQuery: ${formData.query}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
    };

    return (
        <div className="bg-custom-gradient mx-auto p-4 flex flex-col lg:flex-row justify-evenly items-center">
            <div className="w-full lg:w-1/2 px-4">
                <h2 className="text-2xl font-bold mb-2 text-white text-center lg:text-left">Contact Us</h2>
                <p className="text-white mb-6 text-center lg:text-left">Have some questions? We would love to hear from you</p>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                            Mobile No.
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="mobile"
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
                            Query
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="query"
                            name="query"
                            rows={4}
                            value={formData.query}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-purple-700 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="bg-green-500 text-white py-2 px-4 rounded-full flex items-center focus:outline-none focus:shadow-outline"
                            onClick={contactUsThroughWhatsApp}
                        >
                            <AiOutlineWhatsApp className="mr-2" />
                            WhatsApp
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0 border-4 rounded-3xl border-dp border-solid">
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859403.9257405065!2d72.28011030494757!3d24.46298481141138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39693f52370952ff%3A0xb1967e08ddf4991a!2sParasmani%20Gemstone!5e0!3m2!1sen!2sin!4v1720030320518!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 10 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
