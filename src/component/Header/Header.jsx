import './Header.css';
import logo from '../../../public/logo.png';
const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className='navItem'>
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;