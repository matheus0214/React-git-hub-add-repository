import styled from 'styled-components';

export const CartContainer = styled.div`
  background: #fff;
  width: 48%;
  max-width: 48%;
  padding: 22px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  h2 {
    background: transparent;
    color: #777;
    font-weight: normal;
  }

  p {
    background: transparent;
    padding: 15px 0;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
  }

  a {
    background: transparent;
    margin-top: 10px;
    text-decoration: none;
    font-size: 15px;
    text-transform: uppercase;
    color: #ff8a4a;
  }
`;
