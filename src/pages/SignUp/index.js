import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Full name can`t be blank'),
    cpf: Yup.string().required('CPF can`t be blank '),
    password: Yup.string()
      .required('Password can`t be blank')
      .min(6),
  });
  return (
    <>
      <h1>GenBank</h1>
      <img src={logo} alt="GenBank" />

      <Form schema={schema}>
        <Input name="name" placeholder="Full name" />
        <Input name="cpf" placeholder="Your cpf" />
        <Input name="password" type="password" placeholder="Your password" />
        <Input name="balance" placeholder="Your balance" />

        <button type="submit">Create account</button>
        <Link to="/">I alread have a account</Link>
      </Form>
    </>
  );
}
