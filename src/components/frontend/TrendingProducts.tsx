import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Banner from './Banner';
import Footer from './Footer';
import Hero from './Hero';

interface IProduct {
    _id: string;
    imgSrc: string;
    fileKey: string;
    name: string;
    desc: string;
    price: number;
}

const TrendingProducts: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        // Fetch products
        axios.get("/api/get_products")
            .then((res) => {
                console.log(res.data);
                const productsData: IProduct[] = res.data;
                setProducts(productsData);
                setFilteredProducts(productsData.slice(0, 7)); // Display only the latest 6-7 products
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Hero />
            <div className="container mt-8 text-center">
                <h2 className="text-4xl font-medium">
                    Trending Products
                </h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                    {filteredProducts.map((item: IProduct) => (
                        <ProductCard
                            key={item._id}
                            id={item._id}
                            img={item.imgSrc}
                            title={item.name}
                            desc={item.desc}
                            price={item.price}
                            category={''} // Ensure you pass the correct category prop if needed
                        />
                    ))}
                </div>
            </div>

            {/* Banner Section */}
            <Banner />
        </div>
    );
};

export default TrendingProducts;
