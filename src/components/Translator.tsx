import styles from "../styles/translator.module.scss";
import {useState, ChangeEvent, FormEvent} from "react";
import axios from "axios";

export default function Translator(){
    const [enText, setEnText] = useState("");
    const [koText, setKoText] = useState("");
    const [ptText, setPtText] = useState("");


    async function testAPI(){
/*         const responseKoEn = await axios.post("http://localhost:3000/api/papago", {
            text: koText
        });
        const translationKoEn = responseKoEn.data;
        setEnText(translationKoEn);

        const responseEnPt = await axios.post("http://localhost:3000/api/googleTranslate", {
            text: koText
        });

        const translationEnPt = responseEnPt.data;
        setPtText(translationEnPt);  */    
        
        const [responseKoEn, responseEnPt] = await Promise.all([ //porém tem um jeito melhor de fazer múltiplas requisições (desde que não tenha problema que elas sejam feitas simultaneamente)
            await axios.post("http://localhost:3000/api/papago", {
                text: koText
            }),
            await axios.post("http://localhost:3000/api/googleTranslate", {
            text: koText
            })
        ]);
        setEnText(responseKoEn.data);
        setPtText(responseEnPt.data);
    }


    async function handleTranslate(event: FormEvent){

    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleTranslate}>
                <textarea className={styles.koTextArea} value={koText} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setKoText(event.target.value)}/>
                <textarea className={styles.enTextArea} value={enText} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setEnText(event.target.value)}/>
                <textarea className={styles.enTextArea} value={ptText} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setPtText(event.target.value)}/>
                <button type="button" onClick={testAPI}>en &gt; ko</button>
                <button type="submit">Go</button>
            </form>
        </div>
    );
}