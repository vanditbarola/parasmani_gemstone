"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface IProduct {
    _id: string;
    imgSrc: string;
    fileKey: string;
    name: string;
    desc: string;
    category: string;
    price: number;
}

const Shop: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [query, setQuery] = useState('');

    useEffect(() => {
        // Fetch products and categories
        axios.get("/api/get_products")
            .then((res) => {
                console.log(res.data);
                const productsData: IProduct[] = res.data;
                setProducts(productsData);
                setFilteredProducts(productsData); // Initially display all products
                // Extract categories from products data
                const uniqueCategories = Array.from(new Set(productsData.map((item: IProduct) => item.category)));
                setCategories(uniqueCategories);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        handleSearch(value);
    };

    const filterByCategory = (category: string | null) => {
        setSelectedCategory(category);
        const filtered = category
            ? products.filter((product: IProduct) => product.category === category)
            : products;
        setFilteredProducts(filtered);
    };

    const handleSearch = (query: string) => {
        const filtered = products.filter((product: IProduct) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="">
            <div className="container mt-8">
                <div className="flex flex-col sm:flex-row justify-around bg-dp py-3 items-center gap-4">
                    <div 
                        className={`cursor-pointer text-lg text-white p-2 px-5 ${selectedCategory === null ? 'bg-blue-500 ' : ''}`}
                        onClick={() => filterByCategory(null)}
                    >
                        All
                    </div>
                    <div className="flex flex-wrap justify-center mt-4 sm:mt-0 gap-4">
                        {categories.map((category) => (
                            <div
                                key={category}
                                onClick={() => filterByCategory(category)}
                                className={`cursor-pointer text-lg text-white bg-dp p-2 px-5 ${selectedCategory === category ? 'bg-blue-500' : ''}`}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        className="bg-white px-7 p-2 py-2 lg:rounded-full outline-none w-full sm:w-auto"
                        placeholder="Search products..."
                    />
                </div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                    {filteredProducts.map((item: IProduct) => (
                        <ProductCard
                            key={item._id}
                            id={item._id}
                            img={item.imgSrc}
                            category={item.category}
                            title={item.name}
                            desc={item.desc}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
