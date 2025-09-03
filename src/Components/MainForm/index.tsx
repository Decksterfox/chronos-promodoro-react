import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import type { HomeProps } from '../../pages/Home';

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '23:34',
      };
    });
  }
  return (
    <>
      <form action='' className='form'>
        <button type='button' onClick={handleClick}>
          clicar
        </button>
        <span>Task:</span>
        <div className='formRow'>
          <DefaultInput id='task' type='text' placeholder='Digite algo' />
        </div>
        <div className='formRow'>
          <p>
            Tempo restante para o proximo ciclo {state.secondsRemaining} mnt.
          </p>
        </div>
        <div className='formRow'>
          <Cycles />
        </div>
        <div className='formRow'>
          <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
    </>
  );
}
