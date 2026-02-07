import { useState } from "react"
import Select from 'react-select'
import { MyDatePicker } from "../ui/DatePicker.tsx";
import styles from './AddForm.module.css';
import ServiceSelect from "./ServiceSelect.tsx";


type Props = {
    onClose: () => void;
}

export default function AddForm({ onClose }: Props) {

    const [serviceName, setServiceName] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [endDate, setEndDate] = useState<Date | null>()

    return (
        <div className={styles.overlay}>

            <div className={styles.modal}>

                <div className={styles.top}>
                    <h2>Subscription</h2>
                    <button className={styles.closeBtn} onClick={onClose}>✕</button>
                </div>

                <div className={styles.typeBtnWrap}>
                    <button className={styles.typeBtn}>단독 요금제</button>
                    <button className={styles.typeBtn}>패키지</button>
                </div>

                <div className={styles.serviceName}>
                    서비스명
                    <ServiceSelect
                        value = {serviceName} 
                        onChange={(id) => setServiceName(id)}
                    />
                </div>
                <div className={styles.startDate}>
                    시작일 <MyDatePicker />
                </div>
                
                <div className={styles.endDate}>
                    만료일 <MyDatePicker />
                </div>

            </div>
        </div>
    )
}

