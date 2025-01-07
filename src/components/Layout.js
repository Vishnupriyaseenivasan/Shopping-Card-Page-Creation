import { Outlet,Link } from "react-router-dom";

const Layout = () => {
    return(
        <div >
            <nav>
                <ul className='navbar'>
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="categories">Categories</Link>
                    </li>
                    <li className="link">
                        <Link to="account">Account</Link>
                    </li>
                    <li className="link">
                        <Link to="myorders">Myorders</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};
export default Layout;