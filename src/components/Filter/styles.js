import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 40px;
`;

export const Subtitle = styled.h2`
  color: #ffffff;
  font-size: 40px;
  font-weight: 800;
`;

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid grey;
  margin-top: 30px;
  margin-bottom: 10px;
  align-items: center;
  height: 80px;
  border-radius: 30px;
  position: relative;
  outline: none;

  input {
    color: white;
    font-size: 28px;
    letter-spacing: 2px;
    flex-grow: 2;
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
    padding: 20px 60px 20px 20px;
    border-radius: 4px;
    outline: none;
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 20px;
    height: 35px;
    width: 35px;
    outline: none;

    img {
      filter: invert(100%);
      width: 22px;
      height: 23px;
      cursor: pointer;
    }
  }
`;
