import styles from "../styles/socialApps.module.scss";
import Image from "next/image";
import {StaticImageData} from "next/image";

type Social = {
    href: string;
    src: StaticImageData;
    alt: string;
}

interface SocialProps{
    title: string;
    socials: Social[];
}

export default function SocialApps({title, socials}: SocialProps){
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <div className={styles.logoArea}>
                {socials.map(entry => (
                    <a href={entry.href} target="_blank" key={entry.alt}>
                        <Image src={entry.src} alt={entry.alt}/>
                    </a>
                ))}
            </div>
        </div>
    );
}

{/*<a href="https://center-pf.kakao.com/_Zgmxixj/chats" target="_blank">
    <Image src={kakaoIcon} alt="kakao icon"/>
</a>
<a href="https://kmong.com/inboxes?page=1&type=&keyword=" target="_blank">
    <Image src={kmongIcon} alt="kmong icon"/>
</a>*/}