import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;
const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <H1>The Wild Oasis </H1>
      <div>
        <Button>Check in</Button>
        <Button>Check out</Button>
      </div>
      <div>
        <Input placeholder="inter your name" />
      </div>
    </StyledApp>
  );
}
export default App;
