import './Styles/Theme.css';
import './Styles/Global.css';
import { Container } from './Components/Container';
import { Logo } from './Components/Logo';
import { Menu } from './Components/Menu';
import { CountDown } from './Components/CountDown';
import { DefaultInput } from './Components/DefaultInput';
import { Cycles } from './Components/Cycles';
import { DefaultButton } from './Components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <span>Task:</span>
      </Container>
      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput id='task' type='text' placeholder='Digite algo' />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>
    </>
  );
}
