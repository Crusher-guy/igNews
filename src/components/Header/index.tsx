//O Header estará visível em todas as páginas, então vou colocá-lo no _app.
// O componente Link é o recurso que permite que as páginas sejam carregadas como SPA e não precisem carregar todo o conteúdo novamente. Assim, o Next preserva o benefício de react que é garantir boa performance.

import Link from 'next/link'
import { SignInButton } from '../SignInButton/index'
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink'


export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href='/posts'>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}