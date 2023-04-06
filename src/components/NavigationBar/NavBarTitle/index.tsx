import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Title = styled.h1({
  cursor: 'pointer',
  margin: '0px 20px 0px 0px',
  color: 'white',
  '@media(max-width: 550px)': {
    fontSize: '1.5rem',
  },
});

const NavBarTitle = () => {
  return (
    <Link to="/">
      <Title>Weather</Title>
    </Link>
  );
};

export default NavBarTitle;
