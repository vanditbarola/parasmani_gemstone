import { AiFillStar, AiOutlineStar, AiOutlineWhatsApp } from "react-icons/ai";
import toast from "react-hot-toast";
import { UseAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { makeToast } from "@/utils/helper";
import Image from 'next/image';

interface propsType {
    id: string;
    img: string;
    category: string;
    title: string;
    desc: string;
    price: number;
}

const ProductCard = ({ id, img, category, title, desc, price }: propsType) => {
    const dispatch = UseAppDispatch();

    const addProductToCart = () => {
        const payLoad = {
            id,
            img,
            title,
            desc,
            price,
            quantity: 1,
        };
        dispatch(addToCart(payLoad));
        makeToast("Added to cart");
    };

    const buyNowOnWhatsApp = () => {
        const phoneNumber = "9898547707";
        const message = `Hello, I'm interested in buying the product:\n\n${title}\n\nDescription: ${desc}\nPrice: $${price}\n\nIs it available?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
    };

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
            <div className="text-center">
                <Image
                    className="w-full h-auto object-cover rounded-lg"
                    src={img}
                    alt={title}
                    layout="responsive" // Optional: Adjust based on your needs
                    width={700} // Replace with actual width
                    height={475} // Replace with actual height
                />
            </div>
            <div className="mt-4">
                <p className="text-gray-500 text-sm">{category}</p>
                <h2 className="font-medium text-lg">{title}</h2>
                <p className="text-gray-500 text-xs">{desc}</p>
                <div className="flex items-center text-yellow-500 mt-2">
                    <AiFillStar className="mr-1" />
                    <AiFillStar className="mr-1" />
                    <AiFillStar className="mr-1" />
                    <AiOutlineStar className="mr-1" />
                    <AiOutlineStar className="mr-1" />
                    <span className="text-gray-600 text-sm ml-2">(3)</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h2 className="font-medium text-lg text-accent">${price}</h2>
                    <div
                        className="flex gap-2 items-center bg-purple-700 text-white px-4 py-2 rounded-full cursor-pointer"
                        onClick={buyNowOnWhatsApp}
                    >
                        <span>Buy Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
