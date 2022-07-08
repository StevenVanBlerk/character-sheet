import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import scroll from "../images/Scroll.png";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className={styles.scrollContainer}>
        <Image
          alt="Scroll Image"
          src={scroll}
          width={500}
          height={1000}
          layout="fill"
        />
      </div>
    </div>
  );
}
