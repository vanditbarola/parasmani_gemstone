"use client"
import Popup from '@/components/admin-panel/Popup';
import ProductRow from '@/components/admin-panel/ProductRow';
import { setLoading } from '@/redux/features/loadingSlice';
import { UseAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  desc: string;
  price: string;
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispatch = UseAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get("/api/get_products");
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [updateTable, dispatch]);

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-3xl mb-4">All Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-gray-500 border-t border-[#ececec]">
                <th className="py-2 px-4 text-left">SR No.</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Picture</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ProductRow
                  key={product._id}
                  srNo={index + 1}
                  setOpenPopup={setOpenPopup}
                  setUpdateTable={setUpdateTable}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openPopup && (
        <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
      )}
    </div>
  )
}

export default Dashboard;
