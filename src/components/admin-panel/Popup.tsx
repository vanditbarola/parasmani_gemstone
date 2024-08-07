import { setLoading } from '@/redux/features/loadingSlice';
import { UseAppDispatch, UseAppSelector } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup, setUpdateTable }: PropsType) => {
    const productData = UseAppSelector((state) => state.productReducer);
    const dispatch = UseAppDispatch();

    const [inputData, setInputData] = useState({
        name: productData.name,
        category: productData.category,
        price: productData.price,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios
            .put(`/api/edit_product/${productData._id}`, inputData)
            .then((res) => {
                makeToast("Product Updated Successfully!");
                setUpdateTable((prevState) => !prevState); // Trigger data re-fetch
            })
            .catch((err) => console.log(err))
            .finally(() => {
                dispatch(setLoading(false));
                setOpenPopup(false);
            });
    };

    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center">
            <div className="bg-white w-full max-w-[700px] p-4 md:py-8 md:px-10 rounded-lg text-center relative mx-4 md:mx-0">
                <IoIosCloseCircleOutline
                    className="absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-600"
                    onClick={() => setOpenPopup(false)}
                />

                <h2 className="text-2xl -mt-3">Edit Product</h2>

                <form className="mt-6 w-full space-y-4 mx-auto" onSubmit={handleSubmit}>
                    <input
                        className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full"
                        type="text"
                        placeholder="Name"
                        value={inputData.name}
                        onChange={(e) =>
                            setInputData({ ...inputData, name: e.target.value })
                        }
                        required
                    />

                    <input
                        className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full"
                        type="text"
                        placeholder="Category"
                        value={inputData.category}
                        onChange={(e) =>
                            setInputData({ ...inputData, category: e.target.value })
                        }
                        required
                    />

                    <input
                        className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full"
                        type="text"
                        placeholder="Price"
                        value={inputData.price}
                        onChange={(e) =>
                            setInputData({ ...inputData, price: e.target.value })
                        }
                        required
                    />

                    <div className="flex justify-end">
                        <button className="bg-accent block text-white px-8 py-2 rounded-lg self-center">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Popup;
