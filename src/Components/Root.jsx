import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loading";


const Root = () => {
    const navigation = useNavigation()
    return (
        <>
        <Header></Header>
            <div className="whole-site-container">
                {
                    navigation.state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>
                }
            </div>
        <Footer></Footer>
        </>
    );
};

export default Root;