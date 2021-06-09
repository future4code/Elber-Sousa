import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Feed from '../pages/Feed/Feed';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Post from '../components/Post/Post';

const Router = ({ setRightButtonText }) => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/signup">
        <SignUpPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/">
        <Feed />
      </Route>
      <Route exact path="/post/:id">
        <Post />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
