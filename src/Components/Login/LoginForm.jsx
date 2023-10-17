import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/input';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if(userName.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(json => {
        console.log(json);
      });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm