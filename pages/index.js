import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Comp1 from '../components/Comp1';
// import { getSortedPostsData } from '../lib/ports';

// export async function getStaticProps() {
//   const allPostsData =await getSortedPostsData();
//   console.log(allPostsData)
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
const ur='location.href'
export async function getServerSideProps(context) {
  console.log(ur)
  return {
    props: {
      // props for your component
    },
  };
}
export default function Home({allPostsData}) {
  console.log(allPostsData)
  return (
    <div className={styles.container}>
      <Link href="/ports/port1">博客1</Link>
      <Link href="/ports/port2">博客2</Link>
      <div className={styles.test}>测试样式11</div>
      <Comp1></Comp1>
      <Image
        src='/摇一摇.jpeg'
        alt="Picture of the author"
        height={34} // Desired size with correct aspect ratio
        width={34} // Desired size with correct aspect ratio
      />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>测试</div>
    </div>
  )
}
