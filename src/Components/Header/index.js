import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.client.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GenBank" />
          <Link to="/transactions">Transactions</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/clients">Clients</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
