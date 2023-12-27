import { NavigationList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationList>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/products">Products</StyledLink>
    </NavigationList>
  );
};
