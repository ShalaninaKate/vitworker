

import s from "./Header.module.scss";





export function Header() {


  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <h1 className={s.header__title}>Vitworker AI</h1>

      </div>
    </header>
  );
}
