import { useMemo } from "react";
import { useSubscriptionStore } from "../store/useSubscriptionStore.tsx";

export const useSubscriptionSummary = () => {
    const { subscriptions } = useSubscriptionStore(state => state.subscriptions);

\
    const summary = useMemo(() => {
        if (!subscriptions || subscriptions.length === 0) {
            return {
                totalMonthlyCost: 0,
                activeSubscriptionCount: 0,
                mostExpensiveSubscription: null,
                estimatedAnnualCost: 0,
            };
        }
        const now = new Date();
        const currentYear = now.getFullYear();

        const currentMonth = now.getMonth() + 1; 

        const totalMonthlyCost = subscriptions.reduce((acc, item) => acc + item.price, 0);

        const activeSubscriptionCount = subscriptions.length;


        const mostExpensiveSubscription = subscriptions.reduce((prev, current) => {
            return (prev.price > current.price) ? prev : current;
        });

        const estimatedAnnualCost = subscriptions.reduce((acc, item) => {
            const startDate = new Date(item.start_date);
            const startYear = startDate.getFullYear();
            const startMonth = startDate.getMonth() + 1;

            let monthsToPay = 0;

            if (startYear < currentYear) {

                monthsToPay = 12 - currentMonth + 1; 

                if (startMonth < currentMonth) {

                    monthsToPay = 12 - currentMonth + 1;
                } else {

                    monthsToPay = 12 - startMonth + 1;
                }
            }

            return acc + (monthsToPay * item.price);
        }, 0);

        return {
            totalMonthlyCost,
            activeSubscriptionCount,
            mostExpensiveSubscription,
            estimatedAnnualCost,
        };

    }, [subscriptions]);

    return summary;
};