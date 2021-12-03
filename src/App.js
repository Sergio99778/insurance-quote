import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
//Components
import Form from './components/Form';

//Styles
const Container = styled.div`
  padding-top: 10px;
  max-width: 800px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
function App() {
  return (
    <Container>
      <Header />
      <ContainerForm>
        <Form />
      </ContainerForm>
    </Container>
  );
}

export default App;
