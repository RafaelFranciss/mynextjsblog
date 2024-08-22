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
        <p>A 20 year old BSIT student from University of the Assumption living in City of San Fernando Pampanga. My hobbies are playing basketball and playing video games especially with my friends. I also love to eat street foods and listen to my favourite music genres like Hip-Hop and R&B.</p>
        <hr></hr>
        <p><strong>Why did I take up IT?</strong> When I was young, I always watched tech related videos which made me invested in computers and other technologies around it. Then, I always dream of having a system that helps our business to manage our daily sales like other big businesses. Plus, IT is very broad which helps me to find a lot of job opportunities.</p>
        <hr></hr>
        <p><strong>What career do I see myself exploring after graduation?</strong> After graduation, I see myself as either Data Analyst or Web Developer. Those two professions motivate me to continue pursuing my IT program. I love to work with data and put insights about it, but at the same time, I also love creating a website because it enhances my creativity. 
        </p>
        <hr></hr>
        <p><strong>What do I expect to learn in this subject?</strong> In this subject, I expect to learn some libraries and techniques in creating an interactive website which I can use as my reference in the future.</p>
        <hr></hr>
        <p><strong>What topics do I want to be discussed in this subject?
        </strong> The topics I want to discuss in this subject are the basics first, because it will help me to be on the right track, and be more creative and innovative by myself.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        

      </section>
    </Layout>
  );
}