import ExpenseChart from '../../components/dashBoard/ExpenseChart.tsx'
import SummaryCards from '../../components/dashBoard/SummaryCards.tsx'
import UpcomingList from '../../components/dashBoard/UpcomingList.tsx'
import styles from './dashBoard.module.css'

export default function DashBoard() {
    return (
        <div className={styles.container}>

            <div className={styles.topSection}>
                <div className={styles.title}>DashBoard</div>
                <button className={styles.addSubscriptionBtn}>+ 구독 추가</button>

            </div>

                <SummaryCards/>
                <div className={styles.divider}></div>

            <div className={styles.bottomSection}>
                <section className={styles.chartArea}><ExpenseChart/></section>
                <section className={styles.listArea}><UpcomingList/></section>
            </div>
        </div>
    )
}