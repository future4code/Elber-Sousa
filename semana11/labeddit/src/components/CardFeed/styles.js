import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const Posts = styled.div`
  width: 40vw;
  display: flex;
  height: auto;
  flex-direction: column;
  margin-bottom: 5vh;
  margin-top: 5vh;
  @media (max-width: 800px) {
    width: 80vw;
    display: flex;
    justify-content: center;
  }
`;
export const CardStyle = styled(Card)`
  width: 100%;
  border: -1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100%;
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
export const P = styled.p`
  font-weight: lighter;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
