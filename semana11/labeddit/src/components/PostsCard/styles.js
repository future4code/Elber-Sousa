import styled from 'styled-components';

export const Posts = styled.div`
  width: 30vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  @media (max-width: 800px) {
    width: 80vw;
    display: flex;
    justify-content: center;
    margin: 20px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const P = styled.p`
  font-size: large;
  font-weight: bolder;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
