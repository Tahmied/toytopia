import { Outlet, useNavigation } from "react-router";
import Header from "./Header";


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
            {/* footer will be here */}
        </>
    );
};

export default Root;