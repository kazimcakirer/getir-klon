import { FaPlus } from "react-icons/fa";
import Title from "./ui/Title";

export default function Favoreties() {
    return (
        <div
            className="container mx-auto py-4">
            <Title title="Favoriler" />
            <div
                className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 bg-white md:bg-transparent">
                <div
                    className="flex flex-col justify-center items-center relative bg-white gap-y-2 py-2">
                    <div
                        className="p-2 cursor-pointer absolute top-0 right-2 bg-gray-50 border border-gray-100  rounded shadow-md z-10">
                        <FaPlus size={12}  className="text-brand-color" />
                    </div>
                    <img
                        className="object-cover border border-gray-100 cursor-pointer rounded-lg mx-2"
                        alt="ürün"
                        src="https://cdn.getir.com/product/5a7b20fd8e19da0004bb27f8_tr_1615375864268.jpeg" />
                    <div
                        className="text-xl text-primary-brand-color font-semibold">
                        ₺ 2,95
                    </div>
                    <div
                        className="text-base font-semibold">
                        Kuzeyden
                    </div>
                    <div>1.5 L</div>
                </div>


            </div>
        </div>
    )
}