import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);

  text-decoration: none;
  color: white;
  background-color: green;
  font-weight: 500;
  font-size: 14px;

  transition: background-color 0.4s ease;

  &.active {
    background-color: lightgreen;
    color: black;

    &:hover {
      color: black;
    }
  }
`;

export const NavigationList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media (min-width: 1440px) {
    flex-direction: row;
    width: 526px;
  }
`;
