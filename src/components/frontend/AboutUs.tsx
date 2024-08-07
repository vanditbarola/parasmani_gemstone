import React from 'react';
import Head from 'next/head';
import { FaGem, FaHandsHelping, FaHeart } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About Us - Parasmani Gems</title>
      </Head>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Parasmani Gems</h1>
          <p className="text-lg text-gray-600">Discover the Essence of Timeless Elegance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <FaGem className="text-purple-600 text-6xl mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Finest Gemstones</h2>
            <p className="text-gray-600">
              Handpicked gemstones that meet our stringent standards of beauty and craftsmanship.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <FaHandsHelping className="text-purple-600 text-6xl mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Personal Connections</h2>
            <p className="text-gray-600">
              Our experts guide you through your journey to find the perfect piece.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <FaHeart className="text-purple-600 text-6xl mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Authenticity & Quality</h2>
            <p className="text-gray-600">
              Experience products that resonate with authenticity and quality.
            </p>
          </div>
        </div>
        <div className="prose prose-lg text-gray-700 mx-auto">
          <p className="mb-4">
            Welcome to Parasmani Gems, where beauty meets tradition. Founded with a passion for excellence, we specialize in offering the finest gemstones, yantras, rudrakshas, and more, meticulously crafted to perfection.
          </p>
          <p className="mb-4">
            Our journey began with a commitment to provide our customers with not just products, but experiences that resonate with authenticity and quality. Each piece in our collection is handpicked to ensure it meets our stringent standards of beauty and craftsmanship.
          </p>
          <p className="mb-4">
            At Parasmani Gems, we believe in the power of personal connections. Our team of dedicated experts is here to guide you through your journey of finding the perfect piece that aligns with your unique needs and desires.
          </p>
          <p className="mb-4">
            Explore our collection and let us help you discover the timeless elegance that defines Parasmani Gems. Whether you seek a gemstone for its healing properties or a yantra to enhance positivity in your life, we are here to assist you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
