import { Container } from '../../Components/Container';
import { CountDown } from '../../Components/CountDown';
import { MainForm } from '../../Components/MainForm';
import { MainTemplates } from '../../templates/MainTemplates';

export function Home() {
  return (
    <>
      <MainTemplates>
        <Container>
          <CountDown />
        </Container>
        <Container>
          <MainForm />
        </Container>
      </MainTemplates>
    </>
  );
}
