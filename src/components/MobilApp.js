export default function MobilApp() {
    return (
        <div className="container mx-auto md:rounded-xl bg-primary-brand-color bg-mobil-app flex justify-between">
            <div className="flex flex-col gap-y-4 p-10 text-left">
                <h2 className="text-3xl font-bold text-white tracking-tight">Getir'i indirin!</h2>
                <p className="text-base md:text-lg font-semibold text-white tracking-wider">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                <nav className="flex flex-col md:flex-rowjustify-between md:items-center gap-y-2 gap-x-2">
                    <a href="/"><img alt="res" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" /></a>
                    <a href="/"><img alt="res" src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" /></a>
                    <a href="/"><img alt="res" src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" /></a>
                </nav>

            </div>
            <div className="pt-8 self-end hidden md:flex">
                <img alt="res" src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
            </div>
        </div>
    )
}