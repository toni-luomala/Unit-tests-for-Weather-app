import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Logo = styled.img({
  width: '100%',
  maxWidth: '200px',
});

const NavBarLogo = () => {
  return (
    <Link to="/">
      <Logo src={require('assets/logo.png')} alt="Logo" />
    </Link>
  );
};

export default NavBarLogo;
