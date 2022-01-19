import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <header className="header">
    <Link to={'/main'}>
      <h1 className="title">Our Shop</h1>
    </Link>
  </header>
);

export default Header;
