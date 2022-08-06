import { useWindowWidth } from '@react-hook/window-size';
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Slider from 'react-slick'

export default function HeroSection() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySeed: 3500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const phones = {
        US: '+90',
        DE: '+10',
        TR: '+90'
    }
    const [selected, setSelected] = useState('TR')
    const windowWidth = useWindowWidth()
    return (
        <div
            className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent md:before:absolute before:inset-0 before:w-full before:h-full md:before:z-10">
            { windowWidth >= 768 && <Slider className="h-full hidden sm:block" {...settings} >
                <div>
                    <img className="w-full h-[500px] object-cover" alt="Hero"
                        src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" alt="Hero2"
                        src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
                </div>
            </Slider>}
            <div
                className="container flex justify-between items-center md:absolute top-0 left-1/2 md:-translate-x-1/2 h-full z-20 ">
                <div className="hidden md:flex">
                    <img className="w-48 h-48" alt="getir"
                        src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
                    <h3 className="mt-8 font-semibold text-white text-4xl">Dakikalar içinde <br /> kapınızda</h3>
                </div>
                <div className="w-[400px] flex flex-col md:rounded-lg bg-gray-50 p-6">
                    <h4 className="font-semibold text-xl text-center text-purple-800 py-4">Giriş Yap veya Kayıt Ol</h4>
                    <div className="flex gap-x-2 my-4">
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            onSelect={code => setSelected(code)}
                            selected={selected}
                            className="flag-icon"
                        />
                        <label className="flex-1 relative block text-xl font-semibold group">
                            <input type="text" className="h-14 px-4 border-2 text-sm font-semibold border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color peer pt-2" required />
                            <span className="absolute top-0 left-0 h-14 px-4 flex items-center text-sm text-gray-700 transition-all peer-valid:h-7 peer-valid:text-xs peer-valid:text-primary-brand-color peer-focus:h-7 peer-focus:text-xs peer-focus:text-primary-brand-color">Telefon Numarası</span>
                        </label>
                    </div>
                    <button className="bg-yellow-400 rounded-lg py-4 px-4 font-semibold ">Telefon numarası ile devam et</button>

                </div>

            </div>
        </div>
    )
}