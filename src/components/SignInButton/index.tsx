import {   FaGithub } from 'react-icons/fa' // React-icons tem vários ícones. fa significa font answome. Tem logos como github, facebook, etc. 
import { FiX } from 'react-icons/fi'// fi significa Federal Icons. 
import styles from "./styles.module.scss"


export function SignInButton(){
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <button 
    className={styles.signInButton }
     type='button'>
      <FaGithub color='#04d361'/>
      Leonardo Kattah
      <FiX color='737380' className={styles.closeIcon}/>
    </button> 
  ) : (
    <button 
    className={styles.signInButton}
     type='button'>
      <FaGithub color='#eba417'/>
      Sign In with Github
    </button>
  )
} 