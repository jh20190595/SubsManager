import { useEffect, useMemo, useState } from "react"
import { useSubscriptionStore } from "../../store/useSubscriptionStore.tsx";
import { sub } from "date-fns";
import DonutChart from "../ui/DonutChart.tsx";
import styles from './ExpenseChart.module.css';
import { newDate } from "react-datepicker/dist/dist/date_utils.js";
import SortButton from "../ui/SortButton.tsx";

export default function ExpenseChart() {

    const { subscriptions } = useSubscriptionStore(); // 기본은 등록순
    const [sortType, setsortType] = useState<"가격순" | "등록순" | "결제일순">("가격순");

    const sortedData = useMemo(() => {
        const copy = [...subscriptions];
        if (sortType === "가격순") return copy.sort((a, b) => a.price - b.price);
        if (sortType === "등록순") return copy.sort((a, b) => new Date(a.create_at).getTime() - new Date(b.create_at).getTime());
        return copy.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
    }, [sortType, subscriptions]);

    if (subscriptions.length === 0) return <div>등록된 구독이 없어요! </div>

    return (
        <div className="container">
            <div className={styles.topWrap}>
                <h2>결제 차트</h2> 
                <SortButton
                    currentType={sortType}
                    onChange={(type) => setsortType(type)}
                />
            </div>
            <ul>
                {sortedData.map((item, index) => (
                    <li key={item.id} style={{ listStyleType: 'none' }}>
                        <span>로고</span>
                        {item.service_Name} {item.category} {item.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}