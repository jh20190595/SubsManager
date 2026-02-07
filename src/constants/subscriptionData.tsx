

export type CategoryType = 'MUSIC' | 'SHOPPING' | 'OTT';

export interface Plan {
    id: string;
    name: string;
    price: number;
}

export interface SubscriptionService {
    id: string;
    name: string;
    category: CategoryType;
    logoUrl: string;
    plans: Plan[];
}

export const SUBSCRIPTION_SERVICES: SubscriptionService[] = [

    {
        id: 'netflix',
        name: '넷플릭스',
        category: 'OTT',
        logoUrl: '/logos/netflix.png',
        plans: [
            { id: 'nf-ad', name: '광고형 스탠다드', price: 7000 },
            { id: 'nf-st', name: '스탠다드', price: 13500 },
            { id: 'nf-pr', name: '프리미엄', price: 17000 },
            { id: 'nf-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'youtube_premium',
        name: '유튜브 프리미엄',
        category: 'OTT',
        logoUrl: '/logos/youtube-premium.png',
        plans: [
            { id: 'yt-pl', name: '프리미엄 라이트', price: 8500 },
            { id: 'yt-pr', name: '프리미엄', price: 14900 },
            { id: 'yt-pl(ios)', name: '프리미엄 라이트(ios)', price: 10900 },
            { id: 'yt-pr(ios)', name: '프리미엄(ios)', price: 19500 },
            { id: 'yt-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'tving',
        name: '티빙',
        category: 'OTT',
        logoUrl: '/logos/tving.png',
        plans: [
            { id: 'tv-ad', name: '광고형 스탠다드', price: 5500 },
            { id: 'tv-ba', name: '베이직', price: 9500 },
            { id: 'tv-st', name: '스탠다드', price: 13500 },
            { id: 'tv-pr', name: '프리미엄', price: 17000 },
            { id: 'tv-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'disney_plus',
        name: '디즈니 플러스',
        category: 'OTT',
        logoUrl: '/logos/disney-plus.png',
        plans: [
            { id: 'dp-st', name: '스탠다드', price: 9900 },
            { id: 'dp-pr', name: '프리미엄', price: 13900 },
            { id: 'dp-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'wavve',
        name: '웨이브',
        category: 'OTT',
        logoUrl: '/logos/wavve.png',
        plans: [
            { id: 'wv-ba', name: '베이직', price: 7900 },
            { id: 'wv-st', name: '스탠다드', price: 10900 },
            { id: 'wv-pr', name: '프리미엄', price: 13900 },
            { id: 'wv-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'watcha',
        name: '왓챠',
        category: 'OTT',
        logoUrl: '/logos/watcha.png',
        plans: [
            { id: 'wc-ba', name: '베이직', price: 7900 },
            { id: 'wc-pr', name: '프리미엄', price: 12900 },
            { id: 'wc-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'coupang_play',
        name: '쿠팡플레이',
        category: 'OTT',
        logoUrl: '/logos/coupang-play.png',
        plans: [
            { id: 'cp-wow', name: '와우 멤버십 포함', price: 7890 },
            { id: 'cp-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },


    {
        id: 'melon',
        name: '멜론',
        category: 'MUSIC',
        logoUrl: '/logos/melon.png',
        plans: [
            { id: 'ml-ms', name: '모바일 스트리밍 클럽 정기결제', price: 7590 },
            { id: 'ml-st', name: '스트리밍 클럽 정기결제', price: 8690 },
            { id: 'ml-stk', name: '스트리밍 티켓 30일', price: 9790 },
            { id: 'ml-pl', name: '스트리밍 플러스 정기결제', price: 11990 },
            { id: 'ml-tk', name: '스트리밍 플러스 티켓', price: 12540 },
            { id: 'ml-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'spotify',
        name: '스포티파이',
        category: 'MUSIC',
        logoUrl: '/logos/spotify.png',
        plans: [
            { id: 'sp-in', name: '학생', price: 6000 },
            { id: 'sp-in', name: '베이직', price: 7900 },
            { id: 'sp-in', name: '개인 (Individual)', price: 10900 },
            { id: 'sp-du', name: '듀오 (Duo)', price: 16350 },
            { id: 'sp-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'youtube_music',
        name: '유튜브 뮤직',
        category: 'MUSIC',
        logoUrl: '/logos/youtube-music.png',
        plans: [
            { id: 'ym-pr', name: '개인', price: 11900 },
            { id: 'ym-pr(ios)', name: '개인(ios)', price: 14900 },
            { id: 'ym-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'apple_music',
        name: '애플 뮤직',
        category: 'MUSIC',
        logoUrl: '/logos/apple-music.png',
        plans: [
            { id: 'am-in', name: '개인', price: 8900 },
            { id: 'am-fa', name: '가족', price: 13500 },
            { id: 'am-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'genie',
        name: '지니',
        category: 'MUSIC',
        logoUrl: '/logos/genie.png',
        plans: [
            { id: 'gn-sst', name: '스마트 음악감상', price: 7900 },
            { id: 'gn-st', name: '음악감상', price: 8400 },
            { id: 'gn-dsst', name: '데이터 세이프 음악감상', price: 10900 },
            { id: 'gn-hst', name: '초고음질 음악감상', price: 14000 },
            { id: 'gn-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'bugs',
        name: '벅스',
        category: 'MUSIC',
        logoUrl: '/logos/bugs.png',
        plans: [
            { id: 'bg-cst', name: '벅스 크루 할인', price: 5940 },
            { id: 'bg-yst', name: '벅스 1년 할인', price: 7386 },
            { id: 'bg-mst', name: '모바일 무제한 듣기', price: 7590 },
            { id: 'bg-st', name: '무제한 듣기', price: 8690 },
            { id: 'bg-offst', name: '오프라인 무제한 듣기', price: 11990 },
            { id: 'bg-offpst', name: '프리미엄 오프라인 무제한 듣기', price: 17600 },
            { id: 'bg-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },


    {
        id: 'coupang_wow',
        name: '쿠팡 와우',
        category: 'SHOPPING',
        logoUrl: '/logos/coupang-wow.png',
        plans: [
            { id: 'cw-mo', name: '월간 멤버십', price: 7890 },
            { id: 'cw-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'naver_plus',
        name: '네이버 플러스 멤버십',
        category: 'SHOPPING',
        logoUrl: '/logos/naver-plus.png',
        plans: [
            { id: 'np-mo', name: '월간 이용권', price: 4900 },
            { id: 'np-ye', name: '연간 이용권 (월 평균)', price: 3900 },
            { id: 'np-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'baemin_club',
        name: '배민클럽',
        category: 'SHOPPING',
        logoUrl: '/logos/baemin.png',
        plans: [
            { id: 'bm-pmo', name: '월간 이용권(프로모션가)', price: 1990 },
            { id: 'bm-mo', name: '월간 이용권', price: 3900 },
            { id: 'bm-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'kurly_lovers',
        name: '컬리 러버스',
        category: 'SHOPPING',
        logoUrl: '/logos/kurly.png',
        plans: [
            { id: 'kl-pa', name: '컬리패스', price: 4500 },
            { id: 'kl-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
    {
        id: 'shinsegae_universe',
        name: '신세계 유니버스',
        category: 'SHOPPING',
        logoUrl: '/logos/shinsegae.png',
        plans: [
            { id: 'su-ye', name: '연간 멤버십 (연 3만원)', price: 2500 },
            { id: 'su-custom', name: '기타 (직접 입력)', price: 0 },
        ],
    },
];