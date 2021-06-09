import { useHistory } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { goToLogin } from '../routes/coordinator';

const useUnprotectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      goToLogin(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
