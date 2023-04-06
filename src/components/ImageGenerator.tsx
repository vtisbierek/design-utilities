import styles from "../styles/imageGenerator.module.scss";
import {ChangeEvent, FormEvent, useState} from "react";
import ImageSet from "./ImageSet";

export default function ImageGenerator(){
    const [imgCode, setImgCode] = useState("oi");
    const [date, setDate] = useState("");
    const [productNo, setProductNo] = useState("");
    const [item, setItem] = useState("");
    const [imageNo1, setImgNo1] = useState("");
    const [imageNo2, setImgNo2] = useState("");
    const [productName, setProductName] = useState("");
    const [endpoint, setEndpoint] = useState("");

    function generateCode(event: FormEvent){
        event.preventDefault();

        let output = "";
        let detail = "";
        let info = "";

        if(date === "" || productNo === "" || item === "" || productName === "" || endpoint === "") {
            output = "There are information missing, please check and try again.";
        } else if(imageNo1 === "" && imageNo2 === ""){
            output = "You must define at least one image to generate the code.";
        } else if(imageNo1 === "") {
            if(!isNumeric(imageNo2)){
                output = "The first and last images must be defined with numbers, other characters are not allowed. Please check and try again.";
            } else{
                if(Number(imageNo2) < 10){
                    output = `<img src="${endpoint}ujh${date}-${productNo}-${item}-0${imageNo2}.jpg" alt="${productName}"><br>\n`;
                } else{
                    output = `<img src="${endpoint}ujh${date}-${productNo}-${item}-${imageNo2}.jpg" alt="${productName}"><br>\n`;
                }
                detail = `<img src="${endpoint}ujh${date}-${productNo}-${item}-detail.jpg" alt="${productName}"><br>\n`;
                info = `<img src="${endpoint}ujh${date}-${productNo}-${item}-info.jpg" alt="${productName}"><br>\n`;
                output = output + detail + info;
            }
        } else if(imageNo2 === "") {
            if(!isNumeric(imageNo1)){
                output = "The first and last images must be defined with numbers, other characters are not allowed. Please check and try again.";
            } else{
                if(Number(imageNo1) < 10){
                    output = `<img src="${endpoint}ujh${date}-${productNo}-${item}-0${imageNo1}.jpg" alt="${productName}"><br>\n`;
                } else{
                    output = `<img src="${endpoint}ujh${date}-${productNo}-${item}-${imageNo1}.jpg" alt="${productName}"><br>\n`;
                }
                detail = `<img src="${endpoint}ujh${date}-${productNo}-${item}-detail.jpg" alt="${productName}"><br>\n`;
                info = `<img src="${endpoint}ujh${date}-${productNo}-${item}-info.jpg" alt="${productName}"><br>\n`;
                output = output + detail + info;
            }
        } else if(!isNumeric(imageNo1) || !isNumeric(imageNo2)){
            output = "The first and last images must be defined with numbers, other characters are not allowed. Please check and try again.";
        } else if(Number(imageNo1) > Number(imageNo2)) {
            output = "Number of the first image is greater than the number of the last image. Please check and try again.";
        } else{
            for(let i = Number(imageNo1); i <= Number(imageNo2); i++){
                if(i < 10){
                    output = output + `<img src="${endpoint}ujh${date}-${productNo}-${item}-0${i}.jpg" alt="${productName}"><br>\n`;
                } else {
                    output = output + `<img src="${endpoint}ujh${date}-${productNo}-${item}-${i}.jpg" alt="${productName}"><br>\n`;
                }
            }
            detail = `<img src="${endpoint}ujh${date}-${productNo}-${item}-detail.jpg" alt="${productName}"><br>\n`;
            info = `<img src="${endpoint}ujh${date}-${productNo}-${item}-info.jpg" alt="${productName}"><br>\n`;
            output = output + detail + info;
        }
        
       
        setImgCode(output);
    }

    function isNumeric(str: string) {
        if (typeof str != "string") return false; // we only process strings!  
        return !isNaN(Number(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>퍼플리아 이미지 코드 대량 제작</h1>
            <form className={styles.form} onSubmit={generateCode}>
                <ImageSet 
                    onDate={(event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
                    onProdNo={(event: ChangeEvent<HTMLInputElement>) => setProductNo(event.target.value)}
                    onItem={(event: ChangeEvent<HTMLInputElement>) => setItem(event.target.value)}
                    onImg1={(event: ChangeEvent<HTMLInputElement>) => setImgNo1(event.target.value)}
                    onImg2={(event: ChangeEvent<HTMLInputElement>) => setImgNo2(event.target.value)}
                    onProdName={(event: ChangeEvent<HTMLInputElement>) => setProductName(event.target.value)}
                    onEndpoint={(event: ChangeEvent<HTMLInputElement>) => setEndpoint(event.target.value)}
                />
                <button type="submit">Generate</button>
            </form>
            <div className={styles.result}>
                <textarea className={styles.textArea} disabled value={imgCode}></textarea>
            </div>
        </div>
    );
}