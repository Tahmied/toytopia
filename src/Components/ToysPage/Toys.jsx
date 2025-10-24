import Aos from 'aos';
import { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../Loading';
import ToyList from './ToyList';
import ToysHero from './ToysHero';

const Toys = () => {
    useEffect(()=>{
        Aos.init({
            disable: true
        })
    },[])
    return (
        <>
            <Helmet>
                <title>All Toys | ToyTopia</title>
            </Helmet>
            <ToysHero></ToysHero>
            <Suspense fallback={<Loader></Loader>}>
                <ToyList></ToyList>
            </Suspense>
        </>
    );
};

export default Toys;