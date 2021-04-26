import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 680px;
  border: solid 8px black;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: auto;
  margin-top: 20px;
  padding: 2px;
  margin-bottom: 5px;
  header img:last-child {
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    left: 10px;
    bottom: 10px;
    margin-right: 8px;
    :hover {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }
  }
  button {
    position: fixed;
    bottom: 0px;
    right: 0px;
  }
`;

export const Match = styled.div`
  width: 300px;
  height: 80px;
  border: solid 4px black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  border-radius: 2px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 5%;
    margin-left: 16px;
  }
  span {
    font-size: 1.1rem;
    margin-left: 16px;
  }
`;
