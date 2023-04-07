import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import ImageGenerator from '@/components/ImageGenerator';
import Translator from '@/components/Translator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyeona Control Panel</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.panelLeft}>
          <Translator />
        </div>
        <div className={styles.centerLine}></div>
        <div className={styles.panelRight}>
          <ImageGenerator />
        </div>
      </main>
    </>
  )
}
