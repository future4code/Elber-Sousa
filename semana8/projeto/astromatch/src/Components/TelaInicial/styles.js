import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 680px;
  border: solid 8px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 20px;
  padding: 2px;
  margin-bottom: 5px;
`;

export const ActionButtons = styled.footer`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10%;
  position: absolute;
  bottom: 50px;
`;
