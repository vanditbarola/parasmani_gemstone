"use client";
import ProductForm from '@/components/admin-panel/ProductForm';
import React from 'react';

const Products = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white max-w-md w-full rounded-lg shadow-md p-4">
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default Products;
