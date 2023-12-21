import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div >
            <section className='flex justify-between py-7 px-10 shadow-md'>
                <h1 className='text-xl font-bold'>SobkishuBD</h1>
                <ul className='flex gap-5'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/Products">Products</a>
                    </li>
                    <li>
                        <a href="/Dashboard">Dashboard</a>
                    </li>

                </ul>
            </section>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default Header;