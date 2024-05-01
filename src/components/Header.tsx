import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import logo from '../assets/logo-black.svg'

const Header: FC = () => {
    return (
        <header>
            <Helmet>
                <meta charSet="utf-8" />
                <title>WEDO blogs</title>
                <meta name="description" content="WEDO Design" />
                <meta property="og:site_name" content="WEDO" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://wedo.design/uploads/WEDO_logo_bw.png" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="fb:admins" content="Facebook numeric id" />
                <meta name="format-detection" content="telephone=no" />
            </Helmet>
            <div className="px-4 py-6 mb-6 flex justify-between items-center border-b-[2px]">
                <Link to='/'>
                    <img src={logo} alt="wedo" />
                </Link>
                <nav className='nav'>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to='/'>
                                <span>Menu</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;