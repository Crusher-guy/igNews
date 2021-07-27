import { GetStaticProps } from 'next'
import Prismic from "@prismicio/client"
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>25 de julho de 2021</time>
            <strong>SaaS: Single tenant ou Multi-tenant, qual escolher?</strong>
            <p>Quando desenvolvemos um SaaS (Software as a Service) precisamos escolher a melhor arquitetura para compartilhamento de recursos e dados entre os usuários da aplicação.</p>
          </a>
          <a href='#'>
            <time>25 de julho de 2021</time>
            <strong>SaaS: Single tenant ou Multi-tenant, qual escolher?</strong>
            <p>Quando desenvolvemos um SaaS (Software as a Service) precisamos escolher a melhor arquitetura para compartilhamento de recursos e dados entre os usuários da aplicação.</p>
          </a>
          <a href='#'>
            <time>25 de julho de 2021</time>
            <strong>SaaS: Single tenant ou Multi-tenant, qual escolher?</strong>
            <p>Quando desenvolvemos um SaaS (Software as a Service) precisamos escolher a melhor arquitetura para compartilhamento de recursos e dados entre os usuários da aplicação.</p>
          </a>
        </div>
      </main>

    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'publication')
  ], {
    fetch: [ 'publication.title', 'publication.content'],
    pageSize: 100
  })
  return {
    props: {

    }
  }
}

