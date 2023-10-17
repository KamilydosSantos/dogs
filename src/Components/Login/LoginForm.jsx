import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/input';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if(token) {
      getUser(token);
    }
  }, []);

  async function getUser() {
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if(userName.validate() && password.validate()) {
      const {url, options} = TOKEN_POST({
        userName: userName.value,
        password: password.value,
      });

      const response = await fetch(url, options)
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
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