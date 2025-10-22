import { Suspense } from "react";
import Loader from "../Loading";
import Besttoys from "./Besttoys";
import CreativeTwo from "./CreativeTwo";
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
            <CreativeTwo></CreativeTwo>
        </>

    );
};

export default Home;