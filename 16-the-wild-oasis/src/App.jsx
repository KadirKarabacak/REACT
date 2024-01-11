import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

// const H1 = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   background-color: yellow;
// `;

// const Button = styled.button`
//   font-size: 1.4rem;
//   padding: 1.2rem 1.6rem;
//   font-weight: 500;
//   border: none;
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-brand-600);
//   color: var(--color-brand-50);
//   cursor: pointer;
//   box-shadow: var(--shadow-sm);
// `;

// const Input = styled.input`
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-sm);
//   padding: 0.8rem 1.2rem;
//   box-shadow: var(--shadow-sm);
// `;

const StyledApp = styled.main`
  padding: 20px;
`;

// So what about styling App Component ?
function App() {
  return (
    // <div>
    <>
      {/* Adding as a sibling to accept all global CSS */}
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("Check In")}
              >
                Check In
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check Out")}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of Guests" />
              <Input type="number" placeholder="Number of Guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
    // </div>
  );
}

export default App;
