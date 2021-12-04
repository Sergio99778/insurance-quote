import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
//Components
import Form from './components/Form';
import { useState } from 'react';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

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
  const [resume, setResume] = useState({
    quote: 0,
    data: {
      model: '',
      year: '',
      plan: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const { quote, data } = resume;

  return (
    <Container>
      <Header />
      <ContainerForm>
        <Form setResume={setResume} setLoading={setLoading} />
        {loading ? <Spinner /> : null}
        <Resume data={data} />
        {!loading ? <Result quote={quote} /> : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
