import { Suspense } from 'react';
import Loader from '../Loading';
import ToyList from './ToyList';
import ToysHero from './ToysHero';

const Toys = () => {
    return (
        <>
        <ToysHero></ToysHero>
        <Suspense fallback={<Loader></Loader>}>
            <ToyList></ToyList>
        </Suspense>
        </>
    );
};

export default Toys;