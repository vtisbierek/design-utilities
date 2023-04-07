import styles from "../styles/imageGenerator.module.scss";
import {ChangeEvent, FormEvent, useState} from "react";
import ImageSet from "./ImageSet";
import {FaPlus} from "react-icons/fa";

type WorkSet = {
    key: string;
    date: string;
    productNo: string;
    item: string;
    imageNo1: string;
    imageNo2: string;
    productName: string;
    endpoint: string;
}

export default function ImageGenerator(){
    const [work, setWork] = useState<WorkSet[]>([{
        key: "1",
        date: "",
        productNo: "",
        item: "",
        imageNo1: "",
        imageNo2: "",
        productName: "",
        endpoint: "",    
    }]);
    const [work2, setWork2] = useState<WorkSet[]>([{
        key: "1",
        date: "",
        productNo: "",
        item: "",
        imageNo1: "",
        imageNo2: "",
        productName: "",
        endpoint: "",    
    }]);
    const [elementKey, setElementKey] = useState(1);
    const [codeOutput, setCodeOutput] = useState("");

    function validateInputs(){
        let isValid = true;
        work2.forEach(entry => {
            if(entry.date === "" || entry.productNo === "" || entry.item === "" || entry.productName === "" || entry.endpoint === "") {
                isValid = false;
            } else if(entry.imageNo1 === "" && entry.imageNo2 === ""){ 
                isValid = false;
            } else if(entry.imageNo1 === ""){
                if(!isNumeric(entry.imageNo2)){
                    isValid = false;
                }
            } else if(entry.imageNo2 === ""){
                if(!isNumeric(entry.imageNo1)){
                    isValid = false;
                }
            } else if(!isNumeric(entry.imageNo1) || !isNumeric(entry.imageNo2)){
                isValid = false;
            } else if(Number(entry.imageNo1) > Number(entry.imageNo2)) {
                isValid = false;
            } 
        });
        return isValid;
    }

    function generateCode(event: FormEvent){
        event.preventDefault();        

        if(!validateInputs()){
            setCodeOutput("One or more inputs are inconsistent. Please check and try again.");
        } else {
            let output = "";

            work2.map(entry => {
                if (entry.imageNo1 === ""){
                    if(Number(entry.imageNo2) < 10) {
                        output = output + `<img src="${entry.endpoint}ujh${entry.date}-${entry.productNo}-${entry.item}-0${entry.imageNo2}.jpg" alt="${entry.productName}"><br>\n`;
                    } else {
                        output = output + `<img src="${entry.endpoint}ujh${entry.date}-${entry.productNo}-${entry.item}-${entry.imageNo2}.jpg" alt="${entry.productName}"><br>\n`;  
                    }
                } else if (entry.imageNo2 === "") {
                    if(Number(entry.imageNo1) < 10) {
                        output = output + `<img src="${entry.endpoint}ujh${entry.date}-${entry.productNo}-${entry.item}-0${entry.imageNo1}.jpg" alt="${entry.productName}"><br>\n`;
                    } else {
                        output = output + `<img src="${entry.endpoint}ujh${entry.date}-${entry.productNo}-${entry.item}-${entry.imageNo1}.jpg" alt="${entry.productName}"><br>\n`;  
                    }
                } else {
                    for(let i = Number(entry.imageNo1); i <= Number(entry.imageNo2); i++){
                        if(i < 10){
                            output = output + `<img src="${entry.endpoint}ujh${entry.date}-${entry.productNo}-${entry.item}-0${i}.jpg" alt="${entry.productName}"><br>\n`;
                        } else {
                            output = output + `<img src="${entry.endpoint}ujh${entry.date}-${entry.productNo}-${entry.item}-${i}.jpg" alt="${entry.productName}"><br>\n`;
                        }
                    }
                }
                const detail = `<img src="${entry.endpoint}ujh${entry.date}-${entry.productNo}-${entry.item}-detail.jpg" alt="${entry.productName}"><br>\n`;
                const info = `<img src="${entry.endpoint}ujh${entry.date}-${entry.productNo}-${entry.item}-info.jpg" alt="${entry.productName}"><br>\n\n`;
                output = output + detail + info;
            });

            setCodeOutput(output);
        }            
    }

    function isNumeric(str: string) {
        if (typeof str != "string") return false; // we only process strings!  
        return !isNaN(Number(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
    }

    function addWork(){
        const newKey = elementKey + 1;

        const newEntry: WorkSet = {
            key: newKey.toString(),
            date: "",
            productNo: "",
            item: "",
            imageNo1: "",
            imageNo2: "",
            productName: "",
            endpoint: "",    
        }

        setElementKey(newKey);
        const newWork = [...work, newEntry];
        setWork(newWork);
        setWork2(newWork);
    }

    function handleDate(event: ChangeEvent<HTMLInputElement>){
        const result = work.filter(item => item.key === event.target.dataset.id);
        result[0].date = event.target.value;
        const newWork = work.filter(item => item.key !== event.target.dataset.id);
        newWork.push(result[0]);
        setWork(newWork); 
    }

    function handleProductNo(event: ChangeEvent<HTMLInputElement>){
        const result = work.filter(item => item.key === event.target.dataset.id);
        result[0].productNo = event.target.value;
        const newWork = work.filter(item => item.key !== event.target.dataset.id);
        newWork.push(result[0]);
        setWork(newWork);
    }

    function handleItem(event: ChangeEvent<HTMLInputElement>){
        const result = work.filter(item => item.key === event.target.dataset.id);
        result[0].item = event.target.value;
        const newWork = work.filter(item => item.key !== event.target.dataset.id);
        newWork.push(result[0]);
        setWork(newWork);
    }

    function handleImgNo1(event: ChangeEvent<HTMLInputElement>){
        const result = work.filter(item => item.key === event.target.dataset.id);
        result[0].imageNo1 = event.target.value;
        const newWork = work.filter(item => item.key !== event.target.dataset.id);
        newWork.push(result[0]);
        setWork(newWork);
    }

    function handleImgNo2(event: ChangeEvent<HTMLInputElement>){
        const result = work.filter(item => item.key === event.target.dataset.id);
        result[0].imageNo2 = event.target.value;
        const newWork = work.filter(item => item.key !== event.target.dataset.id);
        newWork.push(result[0]);
        setWork(newWork);
    }

    function handleProductName(event: ChangeEvent<HTMLInputElement>){
        const result = work.filter(item => item.key === event.target.dataset.id);
        result[0].productName = event.target.value;
        const newWork = work.filter(item => item.key !== event.target.dataset.id);
        newWork.push(result[0]);
        setWork(newWork);
    }

    function handleEndpoint(event: ChangeEvent<HTMLInputElement>){
        const result = work.filter(item => item.key === event.target.dataset.id);
        result[0].endpoint = event.target.value;
        const newWork = work.filter(item => item.key !== event.target.dataset.id);
        newWork.push(result[0]);
        setWork(newWork);
    }

    function deleteWork(event: React.MouseEvent<HTMLButtonElement>){
        const button: HTMLButtonElement = event.currentTarget;
        const newWork = work.filter(item => item.key !== button.dataset.id);
        setWork(newWork); 
        setWork2(newWork);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>퍼플리아 이미지 코드 대량 제작</h1>
                <button onClick={addWork}><FaPlus /></button>
            </div>
            <form className={styles.form} onSubmit={generateCode}>
                {work2.map(item => (
                    <div className={styles.workItem} key={item.key}>
                        <ImageSet 
                            key={item.key}
                            elementId={item.key}
                            onDate={handleDate}
                            onProdNo={handleProductNo}
                            onItem={handleItem}
                            onImg1={handleImgNo1}
                            onImg2={handleImgNo2}
                            onProdName={handleProductName}
                            onEndpoint={handleEndpoint}
                        />
                        <button type="button" data-id={item.key} onClick={deleteWork} className={styles.deleteButton}>Delete</button>
                    </div>
                ))}
                <button type="submit" className={styles.generateButton}>Generate</button>
            </form>
            <div className={styles.result}>
                <textarea className={styles.textArea} disabled value={codeOutput}></textarea>
            </div>
        </div>
    );
}