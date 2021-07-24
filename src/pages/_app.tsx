import { AppProps } from 'next/app';
import '../styles/global.scss';

//Tudo que eu quiser que se repita em todas as páginas, eu insiro no _app dentro da função Myapp. 
//Toda vez que o usuário mudar de página, tudo que estiver aqui será recarregado, assim, deve-se ter cautela para inserir dados aqui para não prejudicar a performance. 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
 