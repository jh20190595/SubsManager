import styles from "./PlatformLayoutSkeleton.module.css";

interface SkProps {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Sk = ({ width, height, circle, className = "", style }: SkProps) => (
  <div
    className={`${styles.sk} ${circle ? styles.skCircle : ""} ${className}`}
    style={{ width, height, ...style }}
  />
);

const StatCardSkeleton = ({ color }: { color: string }) => (
  <div className={`${styles.statCard} ${styles[color]}`}>
    <div className={styles.statCardHeader}>
      <Sk width={22} height={22} circle />
      <Sk width={80} height={12} />
    </div>
    <Sk width={100} height={18} />
  </div>
);

const BarRowSkeleton = ({ barWidth }: { barWidth: string }) => (
  <li className={styles.barRow}>
    <div className={styles.barSubContent}>
      <Sk width={48} height={11} />
      <Sk width={64} height={11} />
    </div>
    <div className={styles.barTrack}>
      <div className={`${styles.sk} ${styles.barFill}`} style={{ width: barWidth }} />
    </div>
  </li>
);

const UpcomingItemSkeleton = () => (
  <li className={styles.upcomingItem}>
    <div className={styles.itemImgWrap}>
      <Sk width={40} height={40} className={styles.itemImg} />
    </div>
    <div className={styles.itemCenter}>
      <Sk width="60%" height={13} />
      <Sk width={40} height={11} />
    </div>
    <Sk width={60} height={13} className={styles.itemRight} />
  </li>
);

const PaymentListItemSkeleton = () => (
  <div className={styles.paymentListItem}>
    <Sk width={36} height={36} circle />
    <div className={styles.paymentItemInfo}>
      <div className={styles.paymentNameRow}>
        <Sk width={80} height={13} />
        <Sk width={28} height={14} className={styles.badge} />
      </div>
      <Sk width={60} height={12} />
    </div>
    <Sk width={72} height={30} className={styles.kakaoBtn} />
  </div>
);

export default function DashboardSkeleton() {
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logoWrap}>
          <Sk width={50} height={50} circle />
          <Sk width={100} height={20} />
        </div>
        <div className={styles.sidebarDivider} />
        <div className={styles.sectionContainer}>
          {/* Main section */}
          <div className={styles.sectionWrap}>
            <Sk width={40} height={11} className={styles.sectionTitle} />
            <Sk width="80%" height={38} className={styles.menuItem} />
          </div>
          {/* Subscriptions section */}
          <div className={styles.sectionWrap}>
            <Sk width={100} height={11} className={styles.sectionTitle} />
            <Sk width="80%" height={38} className={styles.menuItem} />
            <Sk width="80%" height={38} className={styles.menuItem} />
            <Sk width="80%" height={38} className={styles.menuItem} />
          </div>
          {/* Community section */}
          <div className={styles.sectionWrap}>
            <Sk width={80} height={11} className={styles.sectionTitle} />
            <Sk width="80%" height={38} className={styles.menuItem} />
            <Sk width="80%" height={38} className={styles.menuItem} />
            <Sk width="80%" height={38} className={styles.menuItem} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* SummaryCards top section */}
        <div className={styles.topSection}>
          <Sk width={130} height={26} />
          <Sk width={110} height={40} className={styles.addBtn} />
        </div>

        {/* Stat card grid */}
        <div className={styles.statGrid}>
          <StatCardSkeleton color="blue" />
          <StatCardSkeleton color="green" />
          <StatCardSkeleton color="yellow" />
          <StatCardSkeleton color="pink" />
        </div>

        {/* Divider */}
        <div className={styles.mainDivider} />

        {/* Bottom grid: SubscriptionViewer | UpcomingList */}
        <div className={styles.bottomSection}>
          {/* SubscriptionViewer (col 1, row 1) */}
          <div className={styles.chartArea}>
            <div className={styles.menuWrap}>
              <div className={styles.menuBtnGroup}>
                <Sk width={72} height={30} className={styles.menuBtn} />
                <Sk width={64} height={30} className={styles.menuBtn} />
              </div>
            </div>
            <div className={styles.viewerListWrap}>
              <Sk width={160} height={14} />
              <ul className={styles.bars}>
                <BarRowSkeleton barWidth="85%" />
                <BarRowSkeleton barWidth="30%" />
                <BarRowSkeleton barWidth="92%" />
                <BarRowSkeleton barWidth="20%" />
                <BarRowSkeleton barWidth="8%" />
              </ul>
            </div>
          </div>

          {/* UpcomingList (col 2, rows 1+2) */}
          <div className={styles.upcomingArea}>
            <Sk width={100} height={20} />
            <div className={styles.upcomingWrap}>
              <ul className={styles.upcomingList}>
                <UpcomingItemSkeleton />
                <UpcomingItemSkeleton />
                <UpcomingItemSkeleton />
                <UpcomingItemSkeleton />
                <UpcomingItemSkeleton />
              </ul>
              <div className={styles.paginationWrap}>
                <Sk width={50} height={22} className={styles.pageBtn} />
                <Sk width={30} height={11} />
                <Sk width={50} height={22} className={styles.pageBtn} />
              </div>
            </div>
          </div>

          {/* PaymentReminder (col 1, row 2) */}
          <div className={styles.paymentArea}>
            <div className={styles.paymentHeader}>
              <Sk width={24} height={24} circle />
              <div className={styles.paymentHeaderText}>
                <Sk width={80} height={14} />
                <Sk width={160} height={12} />
              </div>
            </div>
            <div className={styles.paymentDivider} />
            <div className={styles.paymentList}>
              <PaymentListItemSkeleton />
              <PaymentListItemSkeleton />
              <PaymentListItemSkeleton />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile bottom tab bar */}
      <nav className={styles.bottomTab}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={styles.tabItem}>
            <Sk width={22} height={22} circle />
            <Sk width={28} height={10} />
          </div>
        ))}
      </nav>
    </div>
  );
}
