import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
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
    </Layout>
  );
}
