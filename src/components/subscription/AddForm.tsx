import { useState } from "react"
import Select from 'react-select'
import { MyDatePicker } from "../ui/DatePicker.tsx";
import styles from './AddForm.module.css'
import ServiceSelect from "./ServiceSelect.tsx";


type Props = {
    onClose: () => void;
}

export default function AddForm({ onClose }: Props) {

    const [serviceName, setServiceName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [planList, setPlanList] = useState<string>("")
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

                <div className={styles.content}>
                    <div className={styles.inputWrap}>
                        <div className={styles.inputName}>서비스명</div>
                        <ServiceSelect
                            value={serviceName}
                            onChange={(id) => setServiceName(id)}
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        <div className={styles.inputName}>플랜</div>
                        <ServiceSelect
                            value={serviceName}
                            onChange={(id) => setServiceName(id)}
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        <div className={styles.inputName}>가격</div>
                        <ServiceSelect
                            value={serviceName}
                            onChange={(id) => setServiceName(id)}
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        <div className={styles.inputName}>시작일</div> 
                        <MyDatePicker
                            date={startDate}
                            onChange={(data) => setStartDate(data)}
                        />
                    </div>

                    <div className={styles.inputWrap}>
                        <div className={styles.inputName}>갱신일</div>
                        <MyDatePicker
                            date={endDate}
                            onChange={(data) => setEndDate(data)}
                        />
                    </div>

                    <div className={styles.addBtnWrap}>
                        <button className={styles.addBtn}>추가</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

