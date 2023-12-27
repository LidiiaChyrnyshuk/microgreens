import { Basket } from 'components/Basket/Basket';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Logo />
      <Navigation />

      <Basket />
    </Header>
  );
};
