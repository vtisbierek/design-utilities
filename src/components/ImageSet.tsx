import styles from "../styles/imageSet.module.scss";

interface SetProps{
    onDate: any;
    onProdNo: any;
    onItem: any;
    onImg1: any;
    onImg2: any;
    onProdName: any;
    onEndpoint: any;
    elementId: string;
}

export default function ImageSet({onDate, onProdNo, onItem, onImg1, onImg2, onProdName, onEndpoint, elementId}: SetProps){
    return (
        <div className={styles.formFields}>
            <div className={styles.imgInfo} >
                <div className={styles.date}>
                    <label>Date</label>
                    <input type="text" data-id={elementId} onChange={onDate} />
                </div>
                <div className={styles.productNo}>
                    <label>Product No.</label>
                    <input type="text" data-id={elementId} onChange={onProdNo} />
                </div>
                <div className={styles.item}>
                    <label>Item</label>
                    <input type="text" data-id={elementId} onChange={onItem} />
                </div>
                <div className={styles.imageNo}>
                    <label>Image No.</label>
                    <section>
                        <input type="text" data-id={elementId} onChange={onImg1} />
                        <span> ~ </span>
                        <input type="text" data-id={elementId} onChange={onImg2} />
                    </section>
                </div>
                <div className={styles.productName}>
                    <label>Product Name</label>
                    <input type="text" data-id={elementId} onChange={onProdName} />
                </div>
            </div>
            <div className={styles.endpointInfo}>
                <div className={styles.endpoint}>
                    <label>Endpoint</label>
                    <input type="text" data-id={elementId} onChange={onEndpoint} />
                </div>
            </div>
        </div>
    );
}