import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import style from './style.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    // Alterna o valor do tema entre 'dark' e 'light'
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
      <h1>{theme}</h1>
      <nav className={style.menu}>
        <a
          href='#'
          className={style.menuLink}
          aria-label='Ir para Home'
          title='Ir para Home'
        >
          <HouseIcon />
        </a>
        <a
          href='#'
          className={style.menuLink}
          aria-label='Ir para Histórico'
          title='Ir para Histórico'
        >
          <HistoryIcon />
        </a>
        <a
          href='#'
          className={style.menuLink}
          aria-label='Ir para Configurações'
          title='Ir para Configurações'
        >
          <SettingsIcon />
        </a>
        <a
          href='#'
          className={style.menuLink}
          aria-label='Mudar Tema'
          title='Mudar Tema'
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
