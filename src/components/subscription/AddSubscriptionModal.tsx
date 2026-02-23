import styles from './AddSubscriptionModal.module.css'
import { X } from 'lucide-react'; 
import SubscriptionForm from "./SubscriptionForm.tsx";

type Props = {
    onClose: () => void;
}

export default function AddSubscriptionModal({ onClose }: Props) {
    return (
        <div className={styles.overlay}>

            <div className={styles.modal}>

                <div className={styles.top}>
                    <h2>Subscription</h2>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={24} color='#333' strokeWidth={2.5}/>
                    </button>
                </div>


                <div className={styles.typeBtnWrap}>
                    <button className={styles.typeBtn}>단독 요금제</button>
                    <button className={styles.typeBtn}>패키지</button>
                </div>

                <div className={styles.content}>
                    <SubscriptionForm />
                </div>
            </div>
        </div>
    )
}


