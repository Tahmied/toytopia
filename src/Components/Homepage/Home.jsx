import { Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Loading";
import Besttoys from "./Besttoys";
import CreativeTwo from "./CreativeTwo";
import Hero from "./Hero";
import PopularToys from "./PopularToys";
import SliderSection from "./Slider";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ToyTopia | A Local Kids Toy Store Platform</title>
            </Helmet>

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