import ExpenseChart from '../../components/dashBoard/ExpenseChart.tsx'
import SummaryCards from '../../components/dashBoard/SummaryCards.tsx'
import UpcomingList from '../../components/dashBoard/UpcomingList.tsx'
import  { useEffect } from 'react';
import styles from './dashBoard.module.css'
import { useState } from 'react'
import AddSubscriptionModal from '../../components/subscription/AddSubscriptionModal.tsx'
import { useSubscriptionStore } from '../../store/useSubscriptionStore.tsx';


export default function DashBoard() {

    const [isShowModal, setIsShowModal] = useState(false)
    const fetchSubscriptions = useSubscriptionStore((state) => state.fetchSubscriptions);
    

    useEffect(() => {
        fetchSubscriptions();
    }, [])

    const handleClose = () => {
        setIsShowModal(false);
    }

    return (
        <div className={styles.container}>

            <div className={styles.topSection}>
                <div className={styles.title}>DashBoard</div>
                <button className={styles.addSubscriptionBtn} onClick={() => setIsShowModal(true)}>+ 구독 추가</button>
                    {isShowModal && <AddSubscriptionModal onClose={handleClose} />}
            </div>

            <SummaryCards />
            <div className={styles.divider}></div>

            <div className={styles.bottomSection}>
                <section className={styles.chartArea}><ExpenseChart /></section>
                <section className={styles.listArea}><UpcomingList /></section>
            </div>
        </div>
    )
}