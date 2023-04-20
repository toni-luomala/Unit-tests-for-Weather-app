import { Link } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { Icon } from './styles';

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
