import { NavLink } from 'react-router-dom';
import { NavigationList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationList>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </NavigationList>
  );
};
