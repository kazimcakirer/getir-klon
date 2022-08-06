import { useEffect, useState } from "react";
import CategoryItem from 'components/ui/CategoryItem'
import Title from "./ui/Title";

export default function Categories() {
    const data =
        [
            {
                image: "http://cdn.getir.com/cat/5697c78dc181490f00c99fea_f7ef7ccb-f3a4-4388-b787-232967c16320.jpeg",
                title: "Yeni Ürünler"
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            },
            {
                image: "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
                title: "İndirimler"
            },
            {
                image: "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
                title: 'Su & İçeçekler'
            }
        ]
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setCategories(data)

    }, [])

    return (
        <div className="w-full bg-white py-6">
            <div className="container mx-auto px-2 md:px-0">
                <Title title="Kategoriler" />
                <div className="grid gap-x-2 grid-cols-4 sm:grid-cols-6 md:grid:cols-8 lg:gird-cols-10 2xl:grid-cols-12">
                    {categories && categories.map((category, index) => <CategoryItem key={index} category={category} />)}
                </div>
            </div>
        </div>
    )
}
