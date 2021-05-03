import React, { useEffect, useState } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { Principal, TextFieldStyle, Image } from './styles';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import CardFeed from '../../components/CardFeed/CardFeed';
import loading from '../../assets/loading.gif';
import CardPost from '../../components/PostsCard/PostsCard';
import useForm from '../../hooks/useForm';
import axios from 'axios';

const Feed = () => {
  useProtectedPage();
  let [dataFeed, setDataFeed] = useState([]);
  dataFeed = useRequestData([], `${BASE_URL}/posts`);

  const getData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      setDataFeed(response.data);
    } catch (erro) {
      console.log(erro.response.data.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const initialState = {
    text: ''
  };

  const [form, handleInputChange] = useForm(initialState);

  const postScreen =
    dataFeed.posts &&
    dataFeed.posts.map((post) => {
      return (
        <CardFeed
          key={post.id}
          id={post.id}
          username={post.username}
          text={post.text}
          commentsCount={post.commentsCount}
          votesCount={post.votesCount}
        />
      );
    });

  return (
    <Principal>
      <TextFieldStyle
        type={'text'}
        label={'Procurar Post'}
        variant={'standard'}
        fullWidth
        name={'text'}
        value={form.text.toLowerCase()}
        onChange={handleInputChange}
        margin={'normal'}
      />
      <CardPost getData={getData} />
      {postScreen && postScreen.length > 0 ? (
        postScreen.filter((feed) => {
          return form.text
            ? feed.props.username &&
                (feed.props.username.toLowerCase().includes(form.text) ||
                  feed.props.text.toLowerCase().includes(form.text))
            : true;
        })
      ) : (
        <Image src={loading} alt={loading} />
      )}
    </Principal>
  );
};
export default Feed;
