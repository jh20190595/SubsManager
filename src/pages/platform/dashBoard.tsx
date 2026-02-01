import ExpenseChart from '../../components/dashBoard/ExpenseChart.tsx'
import SummaryCards from '../../components/dashBoard/SummaryCards.tsx'
import UpcomingList from '../../components/dashBoard/UpcomingList.tsx'
import styles from './dashBoard.module.css'

export default function DashBoard() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>DashBoard</div>

            <div className={styles.contentWrap}>
                <section className={styles.summaryArea}><SummaryCards/></section>
                <section className={styles.chartArea}><ExpenseChart/></section>
                <section className={styles.listArea}><UpcomingList/></section>
            </div>
        </div>
    )
}