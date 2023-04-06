import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';

const Icon = styled.div({
  height: '50px',
  width: '30px',
  marginLeft: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: 'white',
});

const SettingsButton = () => {
  return (
    <Link to="/settings">
      <Icon>
        <IoMdSettings size={25} />
      </Icon>
    </Link>
  );
};

export default SettingsButton;
