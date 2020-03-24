import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '~/Assets/fastfeet-logo.png';
import { signInRequest } from '~/Store/Modules/Auth/actions';

// import { Container } from './styles';
const schema = Yup.object().shape({
  email: Yup.string()
    .email('insira um e-mail válido')
    .required('o e-mail é obrigatório'),
  password: Yup.string().required('a senha é orbigatória'),
});
export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={Logo} alt="FastFeet" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <label htmlFor="email">SEU E-MAIL</label>
        <Input name="email" placeholder="exemplo@email.com" />
        <label htmlFor="password">SUA SENHA</label>
        <Input name="password" type="password" placeholder="*************" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
