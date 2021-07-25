import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Provider as NextAuthProvider } from 'next-auth/client'

import '../styles/global.scss';

//Tudo que eu quiser que se repita em todas as páginas, eu insiro no _app dentro da função Myapp. 
//Toda vez que o usuário mudar de página, tudo que estiver aqui será recarregado, assim, deve-se ter cautela para inserir dados aqui para não prejudicar a performance. 

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <NextAuthProvider session={pageProps.session }>
    <Header />
    <Component {...pageProps} />
  </NextAuthProvider>
  )
}

export default MyApp
