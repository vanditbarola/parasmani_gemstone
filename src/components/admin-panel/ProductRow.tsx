"use client";
import { IProduct } from '@/app/admin/dashboard/page';
import { setLoading } from '@/redux/features/loadingSlice';
import { setProduct } from '@/redux/features/productSlice';
import { UseAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}

const ProductRow = ({ srNo, setOpenPopup, setUpdateTable, product }: PropsType) => {
  const dispatch = UseAppDispatch();

  const onEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  const onDelete = () => {
    dispatch(setLoading(true));

    const payLoad = {
      fileKey: product.fileKey,
    };

    axios
      .delete("/api/uploadthing", { data: payLoad })
      .then((res) => {
        console.log(res.data);

        axios
          .delete(`/api/delete_product/${product._id}`)
          .then((res) => {
            console.log(res.data);
            makeToast("Product deleted successfully!");
            setUpdateTable((prevState) => !prevState);
          })
          .catch((err) => console.log(err))
          .finally(() => dispatch(setLoading(false)));
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr className="block lg:table-row border-b lg:border-none">
      <td className="flex lg:table-cell flex-col lg:flex-row justify-between items-center py-2 px-4">
        <span className="font-bold lg:hidden">#</span>
        <span>{srNo}</span>
      </td>
      <td className="flex lg:table-cell flex-col lg:flex-row justify-between items-center py-2 px-4">
        <span className="font-bold lg:hidden">Name</span>
        <span>{product.name}</span>
      </td>
      <td className="flex lg:table-cell flex-col lg:flex-row justify-between items-center py-2 px-4">
        <span className="font-bold lg:hidden">Price</span>
        <span>$ {product.price}</span>
      </td>
      <td className="flex lg:table-cell flex-col lg:flex-row justify-between items-center py-2 px-4">
        <span className="font-bold lg:hidden">Image</span>
        <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
          <Image
            src={product.imgSrc}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            alt="product_image"
          />
        </div>
      </td>
      <td className="flex lg:table-cell flex-col lg:flex-row justify-between items-center py-2 px-4">
        <span className="font-bold lg:hidden">Actions</span>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={onEdit}
          />
          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
