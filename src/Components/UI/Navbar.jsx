import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import planetLogo from '../../assets/planet.png';

export default function Navbar() {
  const navLinkActive = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });
  return (
    <nav className={classes.nav}>
      <div>
        <img src={planetLogo} alt="website logo" className={classes.img} />
      </div>
      <h1>Space Travelers&apos; Hub</h1>
      <ul className={classes.list}>
        <li><NavLink exact to="/" style={navLinkActive}>Rockets</NavLink></li>
        <li><NavLink to="/missions" style={navLinkActive}>Missions</NavLink></li>
        <li className={classes.profile}><NavLink to="/profile" style={navLinkActive}>My Profile</NavLink></li>
      </ul>
    </nav>
  );
}
