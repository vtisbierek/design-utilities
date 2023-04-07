import styles from "../styles/socialApps.module.scss";
import Image from "next/image";
import kakaoIcon from "../../public/kakao_icon.png";
import kmongIcon from "../../public/kmong_icon.png";

export default function SocialApps(){
    return (
        <div className={styles.container}>
            <h1>Customer Chats</h1>
            <div className={styles.logoArea}>
                <a href="https://center-pf.kakao.com/_Zgmxixj/chats" target="_blank">
                    <Image src={kakaoIcon} alt="kakao icon"/>
                </a>
                <a href="https://kmong.com/inboxes?page=1&type=&keyword=" target="_blank">
                    <Image src={kmongIcon} alt="kmong icon"/>
                </a>
            </div>
        </div>
    );
}