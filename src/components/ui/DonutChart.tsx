import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip,Legend } from 'recharts';
import { useSubscriptionStore } from '../../store/useSubscriptionStore.tsx';

export default function DonutChart() {
    const { subscriptions } = useSubscriptionStore();

    if (subscriptions.length === 0) {
        return (
            <div style={{ width: '100%', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a8a29e' }}>
                등록된 구독이 없습니다.
            </div>
        );
    }
    const color = ["#dbeafe","#d1fae5","#fef3c7"]

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Tooltip 
                        formatter={(value: number) => `₩${value.toLocaleString()}`}
                    />
                    <Legend verticalAlign='center' height={36}/>
                    <Pie
                        data={subscriptions}
                        innerRadius={70} // 안쪽 반지름 (도넛 구멍 크기)
                        outerRadius={90} // 바깥쪽 반지름
                        paddingAngle={5} // 조각 사이 간격
                        dataKey="price"  // ⭐ 중요: 금액을 기준으로 조각 크기 결정
                        nameKey="service_Name"   // 툴팁에 표시될 이름
                        stroke="none"    // 조각 테두리 제거 (깔끔함)
                    >
                        {subscriptions.map((item, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={color[index]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}