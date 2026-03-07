import { useSubscriptions } from '../../hooks/useSubscriptions.tsx';
import styles from './CalendarComponent.module.css';
import { useState } from 'react';

const getLastDayOfThisMonth = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    
    const currentDate = today.getDate();

    const lastDate = new Date(year, month, 0).getDate(); 
    const nextMonthLastDate = new Date(year, month + 1, 0).getDate(); 
    
    return [currentDate, lastDate, nextMonthLastDate];
}

export default function CalendarComponent() {
    const [currentDate, lastDate, nextMonthLastDate] = getLastDayOfThisMonth();
    const [isFoldOpen, setIsFoldOpen] = useState(false)
    const currentMonthDays = Array.from({ length: lastDate - currentDate + 1 }, (_, i) => currentDate + i);
    const nextMonthDays = Array.from({length : nextMonthLastDate},(_,i) => i+1)
    const data = [...currentMonthDays, ...nextMonthDays].slice(0,28)
    const { data : subscriptions } = useSubscriptions('created_at');

    return (
        <ul className={styles.dayListWrap}>
            {data.map((day,index) => (
                <li key={day} className={styles.dayItem} onClick={()=> setIsFoldOpen(true)}>
                    <p>{day}</p>

                </li>
            ))}
          
        </ul>
    );
}