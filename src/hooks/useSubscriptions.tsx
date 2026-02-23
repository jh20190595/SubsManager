import { useQuery } from "@tanstack/react-query";
import { fetchSubscriptionList } from "../api/subscriptionApi.tsx";
import { Subscription } from "../types/subscription.tsx";
import { useAuthStore } from "../store/useAuthStore.tsx";

export const useSubscriptions = () => {

    const { session } = useAuthStore();
    const userId = session?.user?.id;

    const queryData = useQuery<Subscription[], Error>({
        queryKey: ['subscriptions', userId],
        queryFn: () => fetchSubscriptionList(userId),
        enabled: !!userId,
        staleTime: 1000 * 60 * 5 //5분
    })

    return {
        ...queryData,
        data : queryData.data ?? [],
    }

}