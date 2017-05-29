import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activrClassName="active">Home</IndexLink>
      {" | "}
      <Link to="courses" activrClassName="active">Courses</Link>
      {" | "}
      <Link to="about" activrClassName="active">About</Link>
      {" | "}
      <Link to="concerto" activrClassName="active">concerto</Link>      
    </nav>
  );
};

export default Header;
