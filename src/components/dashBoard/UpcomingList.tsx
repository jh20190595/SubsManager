import { useEffect, useMemo, memo } from 'react';
import { useSubscriptionStore } from '../../store/useSubscriptionStore.tsx';
import styles from './Upcoming.module.css';
import { calculateDday } from '../../utils/dateUtils.tsx';
import { sub } from 'date-fns';

function UpcomingList() {

    const subscriptions  = useSubscriptionStore((state) => state.subscriptions);
    
    console.log("불러온 데이터",subscriptions);

    const upcomingList = useMemo(() => {
        if (!subscriptions) return [];

        return subscriptions
            .map((item) => {
                const dDay = calculateDday(item.next_billing_date);
                return { ...item, dDay };
            })
            .filter((item) => item.dDay >= 0 && item.dDay <= 31)
            .sort((a, b) => a.dDay - b.dDay);

    }, [subscriptions]);


    if (upcomingList.length === 0) {
        return <div className={styles.emptyMsg}>🎉 당분간 결제 예정이 없어요!</div>;
    }

    return (
        <div className={styles.container}>
            <h2>📅 결제 임박 (7일 이내)</h2>
            <ul className={styles.UpcomingListWrap}>
                {upcomingList.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <div className={styles.itemLeft}>Logo</div>
                        <div className={styles.itemCenter}>
                            <span>{item.service_Name}</span>
                            <span>{item.dDay === 0 ? "D-day" : `D-${item.dDay}`}</span>
                        </div>
                        <div className={styles.itemRight}>₩ {item.price.toLocaleString()}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default memo(UpcomingList);