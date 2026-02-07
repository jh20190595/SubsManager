import ExpenseChart from '../../components/dashBoard/ExpenseChart.tsx'
import SummaryCards from '../../components/dashBoard/SummaryCards.tsx'
import UpcomingList from '../../components/dashBoard/UpcomingList.tsx'
import  { useEffect } from 'react';
import styles from './dashBoard.module.css'
import { Activity, useState } from 'react'
import AddForm from '../../components/subscription/AddForm.tsx'
import { useSubscriptionStore } from '../../store/useSubscriptionStore.tsx';

export default function DashBoard() {

    const [isShowModal, setIsShowModal] = useState(false)
    const fetchSubscriptions = useSubscriptionStore((state) => state.fetchSubscriptions);

    useEffect(() => {
        fetchSubscriptions();
    }, [fetchSubscriptions])

    return (
        <div className={styles.container}>

            <div className={styles.topSection}>
                <div className={styles.title}>DashBoard</div>
                <button className={styles.addSubscriptionBtn} onClick={() => setIsShowModal(true)}>+ 구독 추가</button>
                <Activity mode={isShowModal ? 'visible ' : 'hidden'}>
                    <AddForm onClose={() => setIsShowModal(false)} />
                </Activity>
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