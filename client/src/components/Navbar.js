import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  min-height: 7.5vh;
  width: 100%;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.section`
  font-size: 1.5rem;
  font-family: "Abril Fatface";
`

const NavLinksContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 30%;
  gap: 10px;
`

function Navbar() {
  return (
    <NavContainer>
      <Logo>Shoyo</Logo>
      <NavLinksContainer>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/explore'>Explore</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </NavLinksContainer>
    </NavContainer>
  )
}

export default Navbar;