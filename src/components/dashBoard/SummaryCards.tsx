import { useSubscriptionSummary } from '../../hooks/useSubscriptionSummary.tsx';
import { useSubscriptionStore } from '../../store/useSubscriptionStore.tsx';
import Card from '../ui/Card.tsx';
import styles from './SummaryCards.module.css';
import { IoWallet, IoApps, IoPricetag, IoCalendar } from 'react-icons/io5';
import { useMemo } from 'react';

const summaryData = [
    {
        title: "이번 달 총 결제",
        value: 123123,
        icon: <IoWallet size={22} />,
        color: "#dbeafe" // 연한 파랑 (Ice Blue)
    },
    {
        title: "구독 중인 서비스",
        value: "5",
        icon: <IoApps size={22} />,
        color: "#d1fae5" // 연한 초록 (Mint)
    },
    {
        title: "가장 비싼 구독",
        value: "넷플릭스",
        subText: "17,000원",
        icon: <IoPricetag size={22} />,
        color: "#fef3c7" // 연한 노랑 (Cream/Beige)
    },
    {
        title: "연간 예상 지출",
        value: "658,800원",
        icon: <IoCalendar size={22} />,
        color: "#fee2e2" // 연한 빨강 (Soft Pink)
    },
];

export default function SummaryCards() {


    return (
        <div className={styles.container}>
            <div className={styles.summaryWrap}>
                {summaryData.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </div>
    )
}