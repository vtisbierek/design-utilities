import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import ImageGenerator from '@/components/ImageGenerator';
import Translator from '@/components/Translator';
import SocialApps from '@/components/SocialApps';
import kakaoIcon from "../../public/kakao_icon.png";
import kmongIcon from "../../public/kmong_icon.png";
import instagramIcon from "../../public/instagram_icon.png";
import whatsappIcon from "../../public/whatsapp_icon.png";
import pinterestIcon from "../../public/pinterest_icon.png";
import behanceIcon from "../../public/behance_icon.png";

export default function Home() {
  const customerChat = {
    title: "Customer Chat",
    socials: [
      {
        href: "https://center-pf.kakao.com/_Zgmxixj/chats",
        src: kakaoIcon,
        alt: "kakao"
      },
      {
        href: "https://kmong.com/inboxes?page=1&type=&keyword=",
        src: kmongIcon,
        alt: "kmong"
      }
    ]
  }

  const socialMedia = {
    title: "Social Media",
    socials: [
      {
        href: "https://www.instagram.com/untitled.studio.official/",
        src: instagramIcon,
        alt: "instagram"
      },
      {
        href: "https://web.whatsapp.com",
        src: whatsappIcon,
        alt: "whatsapp"
      },
      {
        href: "https://www.pinterest.co.kr/untitledstudioofficial/",
        src: pinterestIcon,
        alt: "pinterest"
      },
      {
        href: "https://www.behance.net/untitled__studio",
        src: behanceIcon,
        alt: "behance"
      },
    ]
  }

  return (
    <>
      <Head>
        <title>Hyeona Control Panel</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.panelLeft}>
          <Translator />
          <SocialApps title={customerChat.title} socials={customerChat.socials}/>
          <SocialApps title={socialMedia.title} socials={socialMedia.socials}/>
        </div>
        <div className={styles.centerLine}></div>
        <div className={styles.panelRight}>
          <ImageGenerator />
        </div>
      </main>
    </>
  )
}
