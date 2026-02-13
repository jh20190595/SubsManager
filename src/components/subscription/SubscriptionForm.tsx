import { useSubscriptionLogic } from '../../hooks/useSubscriptionLogic.tsx'; 
import CustomSelect from './ServiceSelect.tsx'; 
import { MyDatePicker } from '../ui/DatePicker.tsx';
import styles from './SubscriptionForm.module.css';
import { SUBSCRIPTION_SERVICES } from '../../constants/subscriptionData.tsx';
import toast from 'react-hot-toast';

export default function SubscriptionForm() {

    const { 
        form, 
        changeService, 
        changePlan, 
        changePrice, 
        changeDate,
        currentPlanOptions,
        validateForm,
    } = useSubscriptionLogic();

    const serviceOptions = SUBSCRIPTION_SERVICES.map(item => ({
        value: item.id,
        label: item.name
    }));

    const handleSubmit = () => {
        validateForm();
    }

    return (
        <div className={styles.container}>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>서비스명</div>
                <CustomSelect
                    value={form.serviceName}
                    onChange={changeService} 
                    options={serviceOptions}
                    placeholder="서비스를 선택하세요"
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>플랜</div>
                <CustomSelect
                    value={form.plan}
                    onChange={changePlan} 
                    options={currentPlanOptions}
                    placeholder="요금제를 선택하세요"
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>가격</div>
                <input 
                    className={styles.priceInput}
                    value={form.price === 0 ? "" : form.price }
                    onChange={(e) => changePrice(e.target.value)}
                    placeholder="금액 입력"
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>시작일</div>
                <MyDatePicker
                    date={form.startDate}
                    onChange={(date) => changeDate('startDate', date)}
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>갱신일</div>
                <MyDatePicker
                    date={form.endDate}
                    onChange={(date) => changeDate('endDate', date)}
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>결제사</div> 

            </div>

            <div className={styles.addBtnWrap}>
                <button className={styles.addBtn} onClick={handleSubmit}>추가</button>
            </div>
        </div>
    )
}