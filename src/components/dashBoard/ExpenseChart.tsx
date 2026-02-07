import { useEffect, useState } from "react"
import { useSubscriptionStore } from "../../store/useSubscriptionStore.tsx";
import { sub } from "date-fns";




export default function ExpenseChart() {

    const {subscriptions} = useSubscriptionStore();


    if (subscriptions.length === 0) return <div>등록된 구독이 없어요! </div>

    return (
        <div className="container">
            <h2> 결제 차트</h2>
            <ul>
                {subscriptions?.map((item, index) => (
                    <li key={item.id}>
                        <h2>{item.service_Name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}