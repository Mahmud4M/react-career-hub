
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Root = () => {
    return (
        <>
            <div className='container mx-auto py-1 px-5 lg:py-10 lg:px-28'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;