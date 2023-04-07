import styles from "../styles/translator.module.scss";
import {useState, ChangeEvent, FormEvent} from "react";
import axios from "axios";
import {US, BR, KR} from "country-flag-icons/react/3x2";

export default function Translator(){
    const [enText, setEnText] = useState("");
    const [koText, setKoText] = useState("");
    const [ptText, setPtText] = useState("");


    async function translateKo(){
        const [responseKoEn, responseKoPt] = await Promise.all([ 
            await axios.post("http://localhost:3000/api/papago", {
                text: koText,
                source: "ko",
                target: "en"
            }),
            await axios.post("http://localhost:3000/api/googleTranslate", {
                text: koText,
                target: "pt"
            })
        ]);
        setEnText(responseKoEn.data);
        setPtText(responseKoPt.data);
    }

    async function translateEn(){
        const [responseEnKo, responseEnPt] = await Promise.all([ 
            await axios.post("http://localhost:3000/api/papago", {
                text: enText,
                source: "en",
                target: "ko"
            }),
            await axios.post("http://localhost:3000/api/googleTranslate", {
                text: enText,
                target: "pt"
            })
        ]);
        setKoText(responseEnKo.data);
        setPtText(responseEnPt.data);
    }

    async function translatePt(){
        const [responsePtKo, responsePtEn] = await Promise.all([ 
            await axios.post("http://localhost:3000/api/googleTranslate", {
                text: ptText,
                target: "ko"
            }),
            await axios.post("http://localhost:3000/api/googleTranslate", {
                text: ptText,
                target: "en"
            })
        ]);
        setKoText(responsePtKo.data);
        setEnText(responsePtEn.data);
    }

    return (
        <div className={styles.container}>
            <section className={styles.textAreaSection}>
                <div className={styles.koDiv}>
                    <textarea className={styles.koTextArea} value={koText} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setKoText(event.target.value)}/>
                    <button type="button" onClick={translateKo} className={styles.btnKr}><KR /></button>
                </div>
                <div className={styles.enDiv}>
                    <textarea className={styles.enTextArea} value={enText} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setEnText(event.target.value)}/>
                    <button type="button" onClick={translateEn} className={styles.btnUs}><US /></button>
                </div>
                <div className={styles.ptDiv}>
                    <textarea className={styles.enTextArea} value={ptText} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setPtText(event.target.value)}/>
                    <button type="button" onClick={translatePt} className={styles.btnBr}><BR /></button>
                </div>
            </section>
        </div>
    );
}