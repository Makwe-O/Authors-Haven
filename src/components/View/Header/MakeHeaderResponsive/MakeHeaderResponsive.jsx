import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import Modal from '../../Modal/Modal';

const MakeHeaderResponsive = () => {
  return (
    <div className="hamburger">
      <Dropdown item icon="bars">
        <Dropdown.Menu>
          <Dropdown.Item text={<Link to="/search">Search</Link>} />
          <Modal type="login" triggerEl={<Dropdown.Item text="Login" />} />
          <Dropdown.Item text={<Link to="/signup">Sign Up</Link>} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default MakeHeaderResponsive;