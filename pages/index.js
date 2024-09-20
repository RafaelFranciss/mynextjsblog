import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <hr></hr>
        <h1>1. What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</h1>
        <p>My hobby is playing basketball to keep my body active and playing mobile games my favorite song is IVY by Frank Ocean
        My favorite food is Sinampalukang manok, especially when mom cooks. I'm a shy person in person, but when I'm with you, you learn a lot from me, like being a good student and hardworking.</p>
        <hr></hr>
        <h1>2. Why did you take up IT?</h1>
        <p>Apart from the indemand of IT in the industry, we are growing and developing, as our world is now dealing with modern technologies Because I like IT problem solving is suitable for logical thinkers which can handle long hours and great stress when systems don't work and when business.
        </p>
        <hr></hr>
        <h1>3. What career do you see yourself exploring after graduation?</h1>
        <p>Digital marketing is an ideal career for me because I enjoy technology, creativity, marketing, and socializing. Other reasons why online marketing is a desirable career choice include a diverse range of opportunities and high demand.</p> 
        <hr></hr>
        <h1>4. What do you expect to learn in this subject?</h1>
        <p>I expect to learn a lot in our subject because it begins with basic definitions of key terms like system integration, enterprise application integration.</p>
        <hr></hr>
        <h1>5. What topics you want to be discussed in this subject?</h1>
        <p>Designing integration solutions reusing patterns, and implementation integration solutions using service oriented.</p>
        <hr></hr>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        

      </section>
    </Layout>
  );
}