import classes from './Header.module.css';
import { authActions } from './store';
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
const dispatch = useDispatch();
const isLogin = useSelector(state => state.auth.isAuthentiacted);
  const logoutHandler = () =>{
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            {isLogin && <a href='/'>My Products</a>}
          </li>
          <li>
            {isLogin && <a href='/'>My Sales</a>}
          </li>
          <li>
            {isLogin && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
