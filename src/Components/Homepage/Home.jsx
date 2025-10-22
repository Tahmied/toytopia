import { Suspense } from "react";
import Loader from "../Loading";
import Besttoys from "./Besttoys";
import Hero from "./Hero";
import PopularToys from "./PopularToys";
import SliderSection from "./Slider";

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <SliderSection></SliderSection>
            <Suspense fallback={<Loader></Loader>}>
                <PopularToys></PopularToys>
            </Suspense>
            <Besttoys></Besttoys>
        </>

    );
};

export default Home;