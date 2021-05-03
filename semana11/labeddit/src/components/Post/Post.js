import React from 'react';
import { useParams } from 'react-router';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import CardPostDetail from '../../components/CardPostDetail/CardPostDetail';
import { Principal, Comments, P } from './styles';
import { Button, TextField } from '@material-ui/core';
import useForm from '../../hooks/useForm';
import { createComment } from '../../services/useRequestPost';
import { BASE_URL } from '../../constants/urls';
import CardComments from '../../components/CardComments/CardComments';

const Post = () => {
  useProtectedPage();

  const { id } = useParams();
  const getDetail = useRequestData({}, `${BASE_URL}/posts/${id}`);

  const initialState = {
    text: ''
  };
  const [form, handleInputChange, clear] = useForm(initialState);

  const onSubmitForm = (ae) => {
    ae.preventDefault();
    createComment(form, id, clear);
  };

  const commentsScreen =
    getDetail.post &&
    getDetail.post.comments.length > 0 &&
    getDetail.post.comments.map((comments) => {
      return (
        <CardComments
          key={comments.username}
          id={comments.id}
          idPost={id}
          username={comments.username}
          text={comments.text}
          votesCount={comments.votesCount}
        ></CardComments>
      );
    });

  return (
    <Principal>
      {getDetail.post && (
        <CardPostDetail
          id={getDetail.post.id}
          username={getDetail.post.username}
          text={getDetail.post.text}
          votesCount={getDetail.post.votesCount}
          commentsCount={getDetail.post.commentsCount}
        />
      )}

      <P>Comentários</P>
      <Comments>
        {commentsScreen && commentsScreen.length > 0 ? (
          commentsScreen
        ) : (
          <P>Sem comentários</P>
        )}
      </Comments>

      <form onSubmit={onSubmitForm}>
        <TextField
          type={'text'}
          label={'Comentario'}
          variant={'outlined'}
          fullWidth
          name={'text'}
          value={form.text}
          onChange={handleInputChange}
          margin={'normal'}
          required
        />
        <Button
          type={'submit'}
          variant="contained"
          margin={'dense'}
          color="primary"
          fullWidth
        >
          Enviar Comentario
        </Button>
      </form>
    </Principal>
  );
};
export default Post;
