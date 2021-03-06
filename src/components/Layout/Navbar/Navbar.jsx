import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getSpotifyUser } from '../../../lib/api';
import classes from './Navbar.module.css';

import logo from '../../../img/logo.svg';
import search from '../../../img/search.svg';
import avatar from '../../../img/avatar.svg';
import logo_phone from '../../../img/logo_phone.svg';
import home_phone from '../../../img/home_phone.svg';
import explore_phone from '../../../img/explore_phone.svg';
import library_phone from '../../../img/library_phone.svg';

import Search from '../../Search/Search';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [searchIsShown, setSearchIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        const userData = await getSpotifyUser();
        setUser(userData);
      }
      fetchData();
    }, 2000);
  }, []);

  const closeSearchHandler = () => {
    setSearchIsShown(false);
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setSearchIsShown(false);
  });

  return (
    <header className={classes.header}>
      <Link to="/about" className={classes.desktop}>
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>
      <Link to="/about" className={classes.phone}>
        <img src={logo_phone} alt="logo_phone" className={classes.logo_phone} />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.desktop}>
            <NavLink exact to="/" activeClassName={classes.active}>
              Principal
            </NavLink>
          </li>
          <li className={classes.desktop}>
            <NavLink to="/explore" activeClassName={classes.active}>
              Explorar
            </NavLink>
          </li>
          <li className={classes.desktop}>
            <NavLink to="/library" activeClassName={classes.active}>
              Biblioteca
            </NavLink>
          </li>

          <li className={classes.phone}>
            <NavLink exact to="/" activeClassName={classes.active}>
              <img src={home_phone} alt="home_phone" />
            </NavLink>
          </li>
          <li className={classes.phone}>
            <NavLink to="/explore" activeClassName={classes.active}>
              <img src={explore_phone} alt="explore_phone" />
            </NavLink>
          </li>
          <li className={classes.phone}>
            <NavLink to="/library" activeClassName={classes.active}>
              <img src={library_phone} alt="library_phone" />
            </NavLink>
          </li>
          {!searchIsShown ? (
            <li>
              <NavLink to="#">
                <img
                  src={search}
                  alt="search"
                  className={classes.search}
                  onClick={() => setSearchIsShown(true)}
                />
              </NavLink>
            </li>
          ) : (
            <Search onClosedSearch={closeSearchHandler} />
          )}
        </ul>
      </nav>
      <Link to="/">
        <img
          src={user ? user.photo : avatar}
          alt="avatar"
          className={classes.avatar}
        />
      </Link>
    </header>
  );
};

export default Navbar;
