import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputContainer, SignUpFormContainer } from './styles';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signUp } from '../../services/user';

const SignUpForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({
    username: '',
    email: '',
    password: ''
  });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history, setRightButtonText);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputContainer>
          <TextField
            value={form.username}
            name={'username'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          Fazer cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
