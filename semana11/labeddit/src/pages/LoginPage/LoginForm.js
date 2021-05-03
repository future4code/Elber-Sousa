import React from 'react';
import { InputContainer, LoginFormContainer } from './styles';
import { TextField } from '@material-ui/core';
import useForm from '../../hooks/useForm';
import Button from '@material-ui/core/Button';
import { login } from '../../services/user';
import { useHistory } from 'react-router';

const LoginForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({ email: '', password: '' });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setRightButtonText);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputContainer>
          <TextField
            name={'email'}
            value={form.email}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'email'}
          />
          <TextField
            name={'password'}
            value={form.password}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'password'}
          />
        </InputContainer>
        <Button
          type={'submit'}
          fullWidth
          variant={'contained'}
          color={'primary'}
          margin={'normal'}
        >
          Fazer Login
        </Button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
