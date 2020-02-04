import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
  const schema = Yup.object().shape({
    cpf: Yup.string().required('CPF can`t be blank '),
    password: Yup.string().required('Password can`t be blank'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GenBank" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="cpf" placeholder="Your cpf" />
        <Input name="password" placeholder="Your password" />

        <button type="submit">Sign in</button>
        <Link to="/register">Sign up</Link>
      </Form>
    </>
  );
}
