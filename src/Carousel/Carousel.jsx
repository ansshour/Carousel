import { useState } from "react";
import styles from "./Carousel.module.css"


export const Carousel = ({ images }) => {
    const [leftOffset, setLeftOffset] = useState(0);
    const imageArray = images;
    let activeSections = 1;
    if (window.innerWidth > 1000) {
        activeSections = 3;
    }
    const imageNumber = imageArray.length;
    const maxOffsetRight = -(((imageNumber - activeSections) * 1) * 220)
    const maxOffsetLeft = ((imageNumber - activeSections) * 1) * 220
    const rightBtnClickHandler = () => {
        if (leftOffset > maxOffsetRight) {
            setLeftOffset(leftOffset - (activeSections * 220))
        } else {
            setLeftOffset(0);
        }

    }
    const leftBtnClickHandler = () => {
        if (leftOffset < 0) {
            setLeftOffset(leftOffset + (activeSections * 220))
        } else {
            setLeftOffset(maxOffsetRight)
        }

    }
    const sectionConstructor = (activeSections) => {
        const sectionArr = []
        for (let i = 0; i < activeSections; i++) {
            sectionArr.push((<div className={styles.vissible__elems}></div>))
        }
        return sectionArr;
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn} style={{ transform: "rotate(-45deg)" }} onClick={leftBtnClickHandler}><div></div></div>
            <div className={styles.vissbile_elems__wrapper}>
                {sectionConstructor(activeSections)}
                <div className={styles.image__list} style={{ left: `${leftOffset}px` }}>
                    {imageArray.map(elem => <div className={styles.image} style={{ backgroundImage: `url(${elem})` }}></div>)}
                </div>
            </div>
            <div className={styles.btn} style={{ transform: "rotate(130deg)" }} onClick={rightBtnClickHandler}><div></div></div>
        </div >
    )
}
