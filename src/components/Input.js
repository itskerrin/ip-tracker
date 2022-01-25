import styled from 'styled-components';
import { useState } from 'react';

const Input = ({ searchIP }) => {
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    // searchIP(inputValue);
    console.log(inputValue);
    setInputValue('');
  };
  return (
    <>
      <Title>
        <Heading>IP Address Tracker</Heading>
      </Title>
      <Form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <Button type="submit">
          <i className="fas fa-chevron-right"></i>
        </Button>
      </Form>
    </>
  );
};

export default Input;

const Title = styled.div`
  padding: 1em;
`;

const Heading = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
`;

const Form = styled.form`
  input {
    font-family: 'Rubik', sans-serif;
    width: 80vw;
    border: solid 1px white;
    border-radius: 10px;
    padding: 1.2em 0.8em;
  }
`;

const Button = styled.button`
  background: hsl(0, 0%, 17%);
  border: solid 1px hsl(0, 0%, 17%);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1.2em;
  padding-bottom: 1.3em;
  margin-left: -3em;
  cursor: pointer;

  i {
    color: white;
  }
`;
