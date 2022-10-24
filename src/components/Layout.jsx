
import { Outlet, Link, useLocation } from 'react-router-dom';
import './layout.css';

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="container">
      <div className="header" />
      <div className="navbar">
        <Link to="/" style={{ color: pathname === '/' ? 'red' : 'black' }}>Home</Link>
        <br />
        <Link to="/customers" style={{ color: pathname === '/customers' ? 'red' : 'black' }}>Customers</Link>
      </div>
      <Outlet />
    </div>
  )
}