import styled from 'styled-components';

export const SideBar = styled.div`
  width: 30%;
  max-width: 300px;
  background: rgb(255, 255, 255, 0.5);
  padding: 30px 15px;
  border-radius: 10px;
  align-self: flex-start;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-weight: normal;
    margin-bottom: 20px;

    svg {
      background: transparent;
      padding-right: 5px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  background: transparent;
  align-items: stretch;

  input {
    border: 0;
    flex: 1;
    padding: 8px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  padding: 0 15px;
  border: 0;
  background: #ff8a4a;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 5px;
`;

export const Content = styled.div`
  width: 70%;
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
