import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>24 de setembro de 2021</time>
            <strong>Creating a Monorepo Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem distinctio tenetur reprehenderit optio reiciendis nisi exercitationem, nesciunt eos dicta perspiciatis, incidunt similique voluptates omnis quas, aliquam ea animi in?
            </p>
          </a>
          <a href="#">
            <time>24 de setembro de 2021</time>
            <strong>Creating a Monorepo Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem distinctio tenetur reprehenderit optio reiciendis nisi exercitationem, nesciunt eos dicta perspiciatis, incidunt similique voluptates omnis quas, aliquam ea animi in?
            </p>
          </a>
          <a href="#">
            <time>24 de setembro de 2021</time>
            <strong>Creating a Monorepo Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem distinctio tenetur reprehenderit optio reiciendis nisi exercitationem, nesciunt eos dicta perspiciatis, incidunt similique voluptates omnis quas, aliquam ea animi in?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response)

  return {
    props: {}
  }
}