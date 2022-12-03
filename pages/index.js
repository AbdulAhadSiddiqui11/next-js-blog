import Head from "next/head";
import Link from 'next/link';

import Date from '../components/date';
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( { allPostsData } ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.introCard}>
          <span>
            Hi there, I'm Abdul Ahad Siddiqui, a Software Engineer 🚀 from India. I'm a passionate learner who's always willing to learn and work across technologies and domains 💡.
          </span>
          <span>
            Reach out to me on <a href="https://www.linkedin.com/in/abdulahadsiddiqui11/" target="_blank"> LinkedIn </a>
          </span>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
