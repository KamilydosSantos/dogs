import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  const {userLogin, error, loading} = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if(userName.validate() && password.validate()) {
      userLogin(userName.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm