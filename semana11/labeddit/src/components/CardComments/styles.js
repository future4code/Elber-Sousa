import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';

export const CardStyle = styled(Card)`
  width: 100%;
  border: -1px solid black;
  display: flex;
  min-height: 20vh;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5vh;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const Posts = styled.div`
  width: 40vw;
  display: flex;
  height: auto;
  flex-direction: column;
  margin-bottom: 5vh;
  @media (max-width: 800px) {
    width: 80vw;
    display: flex;
    justify-content: center;
  }
`;
export const CardContentStyle = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

export const PostName = styled(Typography)`
  display: flex;
  flex: 1;
`;
export const PostText = styled(Typography)`
  display: flex;
  justify-content: center;
`;
export const PostComents = styled(CardActions)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 70vw;
    display: flex;
    justify-content: space-between;
  }
`;
