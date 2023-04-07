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