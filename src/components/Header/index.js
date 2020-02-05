import React from 'react';

// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.client.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GenBank" />
          <Link to="/transactions">Transactions</Link>

          <Link to="/clients">Clients</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Bruno</strong>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Bruno"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
