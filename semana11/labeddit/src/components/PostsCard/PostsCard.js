import React from 'react';
import { Posts, Form, P } from './styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';
import { createPost } from '../../services/useRequestPost';

const PostsCard = (props) => {
  const initialState = {
    text: '',
    title: ''
  };

  const [form, handleInputChange, clear] = useForm(initialState);

  const onSubmitForm = (e) => {
    e.preventDefault();
    createPost(form, clear, props.getData);
  };

  return (
    <Posts>
      <Form onSubmit={onSubmitForm}>
        <P> Faça um post</P>
        <TextField
          type={'text'}
          label={'Titulo'}
          variant={'outlined'}
          fullWidth
          name={'title'}
          value={form.title}
          onChange={handleInputChange}
          margin={'normal'}
        />
        <TextField
          type={'text'}
          label={'Post'}
          variant={'outlined'}
          fullWidth
          name={'text'}
          value={form.text}
          onChange={handleInputChange}
          margin={'normal'}
        />

        <Button
          type={'submit'}
          variant="contained"
          margin={'normal'}
          color="primary"
          fullWidth
        >
          Postar
        </Button>
      </Form>
    </Posts>
  );
};

export default PostsCard;
