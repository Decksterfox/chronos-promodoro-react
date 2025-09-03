import type { HomeProps } from '../../pages/Home';
import style from './style.module.css';

export function CountDown({ state, setState }: HomeProps) {
  return (
    <>
      <div className={style.countDown}>{state.formattedSecondsRemaining}</div>
    </>
  );
}
