import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Row>
        <Row type="horizontal">
          <Heading type="h1">The Wild Oasis </Heading>
          <div>
            <Heading type="h4">Check in and out </Heading>
            <Button>Check in</Button>
            <Button variation="danger">Check out</Button>
          </div>
        </Row>
        <Row>
          <Heading as="h4">Form </Heading>
          <form>
            <Input placeholder="inter your name" />
            <Input placeholder="inter your name" />
          </form>
        </Row>
      </Row>
    </StyledApp>
  );
}
export default App;
