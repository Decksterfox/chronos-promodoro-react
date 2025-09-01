import { TimerIcon } from 'lucide-react';
import style from './style.module.css';

export function Logo() {
  return (
    <>
      <div className={style.logo}>
        <a href='#' className={style.logoLink}>
          <TimerIcon />
        </a>
        <span>Chronos</span>
      </div>
    </>
  );
}
