import styles from "../styles/socialApps.module.scss";
import Image from "next/image";
import kakaoIcon from "../../public/kakao_icon.png";

export default function SocialApps(){
    return (
        <div className={styles.container}>
            <a href="https://center-pf.kakao.com/_Zgmxixj/dashboard" target="_blank">
                <Image src={kakaoIcon} alt="kakao icon"/>
            </a>
        </div>
    );
}