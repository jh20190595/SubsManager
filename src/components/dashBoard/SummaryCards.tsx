import Card from '../ui/Card';
import styles from './SummaryCards.module.css';
import { IoWallet,IoApps,IoPricetag, IoCalendar } from 'react-icons/io5';

const summaryData = [
        { 
            title: "이번 달 총 결제", 
            value: "54,900원", 
            icon: <IoWallet size={24} />, 
            color: "#3b82f6" // 파랑
        },
        { 
            title: "구독 중인 서비스", 
            value: "5개", 
            icon: <IoApps size={24} />, 
            color: "#10b981" // 초록
        },
        { 
            title: "가장 비싼 구독", 
            value: "넷플릭스", 
            subText: "17,000원", // 부가 설명
            icon: <IoPricetag size={24} />, 
            color: "#f59e0b" // 노랑
        },
        { 
            title: "연간 예상 지출", 
            value: "658,800원", 
            icon: <IoCalendar size={24} />, 
            color: "#ef4444" // 빨강
        },
    ];

export default function SummaryCards() {
    return (
        <div className={styles.container}>
            <div className={styles.summaryWrap}>
                {summaryData.map((item,idx) => (
                    <Card key={idx}>
                        <div className={styles.CardWrap}>
                            <div>{item.title}</div>
                            <div>{item.value}</div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}