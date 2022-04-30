import { useEffect, useState } from "react";
import styles from "./Carousel.module.css"


export const Carousel = () => {
    const [leftOffset, setLeftOffset] = useState(0);
    const imageArray = [
        "https://chudo-prirody.com/uploads/posts/2021-08/1628811024_148-p-pushistie-koti-foto-155.jpg",
        "https://cameralabs.org/media/cameralabs/fotom/22-01-14/cat13.jpg",
        "https://vsthemes.org/uploads/posts/2017-08/1582034175_white-cat_vsthemes_ru-46.jpg",
        "https://avatars.mds.yandex.net/get-zen_doc/153162/pub_5d1a36c18706ab00adcd84fe_5d1a3c716ef88600ac03801d/scale_1200",
        "https://data11.gallery.ru/albums/gallery/288990-99101-32019107-m750x740-u7b9e2.jpg",
        "https://pro-kotikov.ru/wp-content/uploads/2019/02/kotohleb-photo-6.jpg",
        "https://doseng.org/uploads/posts/2010-09/1285652219_doseng.org_koty_73.jpg",
        "https://img4.goodfon.ru/original/2048x2048/1/dc/britanskaia-korotkoshiorstnaia-koshka-kot-kote-koteika-krasa.jpg",
        "https://chudo-prirody.com/uploads/posts/2021-08/1628695532_100-p-tolstii-kot-foto-111.jpg"
    ];
    const imageNumber = imageArray.length;
    const maxOffsetRight = -((imageNumber - 3) * 220)
    const maxOffsetLeft = (imageNumber - 3) * 220
    const rightBtnClickHandler = () => {
        if (leftOffset > maxOffsetRight) {
            setLeftOffset(leftOffset - 660)
        } else {
            setLeftOffset(0);
        }

    }
    const leftBtnClickHandler = () => {
        if (leftOffset < 0) {
            setLeftOffset(leftOffset + 660)
        } else {
            setLeftOffset(maxOffsetRight)
        }

    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn} style={{ transform: "rotate(-45deg)" }} onClick={leftBtnClickHandler}><div></div></div>
            <div className={styles.vissbile_elems__wrapper}>
                <div className={styles.vissible__elems}></div>
                <div className={styles.vissible__elems}></div>
                <div className={styles.vissible__elems}></div>
                <div className={styles.image__list} style={{ left: `${leftOffset}px` }}>
                    {imageArray.map(elem => <div className={styles.image} style={{ backgroundImage: `url(${elem})` }}></div>)}
                </div>
            </div>
            <div className={styles.btn} style={{ transform: "rotate(130deg)" }} onClick={rightBtnClickHandler}><div></div></div>
        </div >
    )
}
