import { Contacts } from 'components/Contacts/Contacts';
import { Logo } from 'components/Logo/Logo';
import { Social } from 'components/Social/Social';
import { FooterBox } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBox>
      <Logo />
      <Contacts />
      <Social />
    </FooterBox>
  );
};
