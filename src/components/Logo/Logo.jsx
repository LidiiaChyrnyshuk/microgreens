import { NavLink } from 'react-router-dom';
import { LogoText } from './Logo.styled';

export const Logo = () => {
  return (
    <NavLink to="/">
      <LogoText>Green Master</LogoText>
    </NavLink>
  );
};
