import { ReactNode } from "react"
import styles from './Card.module.css';

interface Props {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
    subText?: string;
    logo? : string;
}

export default function Card({ title, value, icon, color, subText,logo }: Props) {
    return (
        <div className={styles.cardBox} style={{ backgroundColor: color }}>
            <div className={styles.itemHeader}>
                <div className={styles.itemIcon}>{icon}</div>
                <div className={styles.itemTitle}>{title}</div>
            </div>
            <div className={styles.itemContent}>
                {logo && <div><img src={logo} style={{ width : '30px',height : '30px', borderRadius : '30%'}}/></div>}
                <div className={styles.itemValue}>{value}</div>
                {subText && <div className={styles.itemSubText}>{subText}</div>}
            </div>
        </div>
    )
}