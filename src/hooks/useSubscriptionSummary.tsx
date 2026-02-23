import { useMemo } from "react";
import { useSubscriptions } from "./useSubscriptions.tsx";

export const useSubscriptionSummary = () => {
    
    const { data : subscriptions , isLoading , isError} = useSubscriptions();


    const summary = useMemo(() => {
        if (!subscriptions || subscriptions.length === 0) {
            return {
                totalMonthlycost: 0,
                activeService : 0,
                MaxPriceService : null,
                annualTotalCost : 0,
            }
        }
        const totalMonthlycost = subscriptions.reduce((acc, item) => { return acc += item.price }, 0)

        const activeService = subscriptions.length

        const MaxPriceService = subscriptions.reduce((prev,current) => {
            return (prev.price > current.price) ? prev : current;
        })

        const annualTotalCost = subscriptions.reduce((acc,item) => {
            const month = new Date(item.start_date).getMonth() + 1
            const price = (12 - month) * item.price

            return acc += price;
        },0)


        return {
            totalMonthlycost,
            activeService,
            MaxPriceService,
            annualTotalCost,
        }
    }, [subscriptions])

    return { summary, isLoading, isError}
};