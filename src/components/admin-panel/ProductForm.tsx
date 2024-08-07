"use client"
import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { UploadButton } from '@/utils/uploadthing'; // Adjust the path as per your project structure
import { setLoading } from '@/redux/features/loadingSlice';
import { UseAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
// import type { OurFileRouter } from '@/app/api/uploadthing/core'; // Assuming this is the correct path to OurFileRouter

interface IPayload {
    imgSrc: null | string;
    fileKey: null | string;
    name: string;
    category: string;
    price: string;
    desc: string;
}

const ProductForm = () => {
    const [payLoad, setPayLoad] = useState<IPayload>({
        imgSrc: null,
        fileKey: null,
        name: "",
        category: "",
        price: "",
        desc: "",
    });

    const categories = [
        "Gemstone",
        "Yantra",
        "Rudraksha",
        "Mala",
        "Bracelet",
        "Vastu Items",
        "Shank",
        "Rings",
    ];

    const dispatch = UseAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios.post("/api/add_product", payLoad)
            .then(res => {
                makeToast("Product added successfully");
                setPayLoad({
                    imgSrc: null,
                    fileKey: null,
                    name: "",
                    category: "",
                    price: "",
                    desc: "",
                });
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    };

    return (
        <form className="flex flex-col gap-4 max-w-2xl mx-auto p-4" onSubmit={handleSubmit}>
            {/* Image Upload Section */}
            <div className="flex justify-center mb-4">
                <Image
                    className="max-h-[300px] w-auto object-contain rounded-md"
                    src={payLoad.imgSrc ? payLoad.imgSrc : "/placeholder.jpg"}
                    width={800}
                    height={500}
                    alt="product_image"
                />
            </div>
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    console.log(res);
                    if (res && res.length > 0) {
                        setPayLoad({
                            ...payLoad,
                            imgSrc: res[0]?.url,
                            fileKey: res[0]?.key,
                        });
                    }
                }}
                onUploadError={(error: Error) => {
                    console.log(`ERROR! ${error}`);
                }}
            />

            {/* Product Name Input */}
            <div>
                <label className="block ml-1">Product Name</label>
                <input
                    className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    type="text"
                    value={payLoad.name}
                    onChange={(e) => setPayLoad({ ...payLoad, name: e.target.value })}
                    required
                />
            </div>

            {/* Product Category Dropdown */}
            <div>
                <label className="block ml-1">Product Category</label>
                <select
                    className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    value={payLoad.category}
                    onChange={(e) => setPayLoad({ ...payLoad, category: e.target.value })}
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Product Price Input */}
            <div>
                <label className="block ml-1">Product Price</label>
                <input
                    className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    type="text"
                    value={payLoad.price}
                    onChange={(e) => setPayLoad({ ...payLoad, price: e.target.value })}
                    required
                />
            </div>

            {/* Product Description Input */}
            <div>
                <label className="block ml-1">Product Description</label>
                <textarea
                    className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    value={payLoad.desc}
                    rows={4}
                    onChange={(e) => setPayLoad({ ...payLoad, desc: e.target.value })}
                    required
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button className="bg-pink text-white px-8 py-2 rounded-md">Add</button>
            </div>
        </form>
    );
};

export default ProductForm;
