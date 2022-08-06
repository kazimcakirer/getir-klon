import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import Title from "./ui/Title";


function NextBtn({ className, style, onClick }) {
    return (
        <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowForward size={22} />
        </button>
    )
}

function PrevBtn({ className, style, onClick }) {
    return (
        <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowBack size={22} />
        </button>
    )
}

export default function Campaingns() {

    const Banners = [
        {
            slider: 'https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1629921878792.jpeg'
        },
        {
            slider: 'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg'

        },
        {
            slider: 'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg'

        },
        {
            slider: 'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg'

        }
    ]
    const [banners, setBanners] = useState([])
    useEffect(() => {
        setBanners(Banners)
    }, [])

    const settings = {
        dots: false,
        infitine: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 3500,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className="mx-auto container py-2">
            <Title className="hidden md:block" title="Kampanyalar" />
            <Slider className="md:-mx-2 relative" {...settings}>
                {
                    banners.map((banner, index) => (
                        <div key={index}>
                            <picture className="block px-2">
                                <img alt="kart" src={banner.slider} />
                            </picture>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}