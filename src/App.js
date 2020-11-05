import styled from 'styled-components';
import './App.css';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: white;
  background: #004d7a;
  border: 1px solid ${props => props.theme.main};
`;
Button.defaultProps = {
  theme: {
    main: "transparent"
  }
}

const Input = styled.input`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
color: black;
border: 1px solid ${props => props.theme.main};
`
Input.defaultProps = {
  theme: {
    main: "transparent"
  }
}

const Container = styled.input``;

function App() {
  return (
    <div className="Container">
      <div className="Header">
        <Input></Input>
        <Button>Buscar</Button>
      </div>
      <div className="Body">
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </div>
      <div className="Footer">
        Footer
      </div>
    </div>
  );
}

export default App;
