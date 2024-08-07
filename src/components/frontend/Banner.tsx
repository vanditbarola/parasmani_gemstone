import React from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
    return (
        <div className="banner mt-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-10 px-5 rounded-md shadow-lg">
            <div className="w-full lg:max-w-full mx-auto flex flex-col-reverse md:flex-row justify-around items-center gap-8">
                <div className="text-left md:text-left flex-1 px-4 lg:px-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get Personalized Rashi Ratn</h2>
                    <p className="text-md md:text-lg lg:text-xl text-justify mb-6">
                        Unlock the secrets of your destiny with our exclusive Rashi Ratn collection.
                        Consult with the best Pandits and see your Kundli to discover the perfect gemstones
                        for your zodiac sign.
                    </p>
                    <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition duration-300">
                        Learn More
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image src="/rr.jpg" alt="Rashi Ratan" width={500} height={400} className="rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
