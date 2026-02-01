import styles from './Upcoming.module.css';

const MOCK_DATA = [
    { id: 1, name: "넷플릭스", price: 17000, date: "2026-02-15", logo: "N" },
    { id: 2, name: "유튜브 프리미엄", price: 14900, date: "2026-02-05", logo: "Y" }, // 이게 1등이어야 함
    { id: 3, name: "쿠팡 와우", price: 4990, date: "2026-02-28", logo: "C" },
    { id: 4, name: "어도비 클라우드", price: 62000, date: "2026-02-10", logo: "A" },
    { id: 5, name: "멜론", price: 10900, date: "2026-03-01", logo: "M" },
];

export default function UpcomingList() {

    const tody = new Date();

    return (
        <div className={styles.container}>

            <h2>결제 임박</h2>

            <div className={styles.UpcomingListWrap}>
                넷플
            </div>


        </div>
    )
}