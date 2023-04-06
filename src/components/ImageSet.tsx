import styles from "../styles/imageSet.module.scss";

interface SetProps{
    onDate: any;
    onProdNo: any;
    onItem: any;
    onImg1: any;
    onImg2: any;
    onProdName: any;
    onEndpoint: any;
}

export default function ImageSet({onDate, onProdNo, onItem, onImg1, onImg2, onProdName, onEndpoint}: SetProps){
    return (
        <div className={styles.formFields}>
            <div className={styles.imgInfo} >
                <div className={styles.date}>
                    <label>Date</label>
                    <input type="text" onChange={onDate} />
                </div>
                <div className={styles.productNo}>
                    <label>Product No.</label>
                    <input type="text" onChange={onProdNo} />
                </div>
                <div className={styles.item}>
                    <label>Item</label>
                    <input type="text" onChange={onItem} />
                </div>
                <div className={styles.imageNo}>
                    <label>Image No.</label>
                    <section>
                        <input type="text" onChange={onImg1} />
                        <span> ~ </span>
                        <input type="text" onChange={onImg2} />
                    </section>
                </div>
                <div className={styles.productName}>
                    <label>Product Name</label>
                    <input type="text" onChange={onProdName} />
                </div>
            </div>
            <div className={styles.endpointInfo}>
                <div className={styles.endpoint}>
                    <label>Endpoint</label>
                    <input type="text" onChange={onEndpoint} />
                </div>
            </div>
        </div>
    );
}