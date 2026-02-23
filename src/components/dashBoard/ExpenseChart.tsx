import { useEffect, useMemo, useState } from "react"
import { sub } from "date-fns";
import DonutChart from "../ui/DonutChart.tsx";
import styles from './ExpenseChart.module.css';
import { newDate } from "react-datepicker/dist/dist/date_utils.js";
import GaugeBar from "../ui/GaugeBar.tsx";
import { useSubscriptions } from "../../hooks/useSubscriptions.tsx";

export default function ExpenseChart() {

    const {data : subscriptions, isLoading, isError, error }  = useSubscriptions();

    if (subscriptions.length === 0) return <div>등록된 구독이 없어요! </div>

    return (
        <div className="container">
            <div className={styles.topWrap}>
                <h2>결제 차트</h2>
            </div>
            
            <ul className={styles.menu}>
                <GaugeBar/>
            </ul>


            
        </div>
    )
}