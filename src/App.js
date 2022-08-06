import './style.css';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaingns from "./components/Campaingns";
import Favoreties from "./components/Favoreties";
import MobilApp from "./components/MobilApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useWindowWidth } from '@react-hook/window-size';

function App() {

    const windowWidth = useWindowWidth()

    return (
        <div className="App overflow-x-hidden">
            <Header />
            {windowWidth <= 768 && <Campaingns />}
            <HeroSection />
            <Categories />
            <div className="bg-gray-100 bg-opacity-40 flex flex-col gap-y-4 py-6">
                {windowWidth >= 768 && <Campaingns />}
                <Favoreties />
                <MobilApp />
                <Cards />
            </div>
            <Footer />
        </div>
    );
}

export default App;
