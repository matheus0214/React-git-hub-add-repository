import styled from 'styled-components';

export const Owner = styled.div`
  padding: 15px;
  width: 100%;
  margin: 20px 15px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  p {
    font-size: 16px;
    line-height: 1.9;
    color: #666;
    margin-top: 15px;
    font-weight: bold;
  }

  quote {
    color: #757575;
    margin-top: 15px;
  }
`;

export const RepositoryContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  border: 1px solid rgb(255, 255, 255, 0.5);
  border-radius: 5px;
  margin-bottom: 15px;
  flex-direction: column;

  h3 {
    font-size: 16px;
    color: #777;
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.6;
  }
`;
