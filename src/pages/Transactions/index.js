import React from 'react';

// import logo from '~/assets/logo.svg';
import api from '~/services/api';

// import { Container } from './styles';

export default function Transactions() {
  api.get('transactions');
  return <>Transactions</>;
}
