import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertSubscription } from "../api/subscriptionApi.tsx";
import { insertSubscriptionData } from "../api/subscriptionApi.tsx";
import { useAuthStore } from "../store/useAuthStore.tsx";
import toast from "react-hot-toast";

export const useAddSubscription = () => {
    const queryClient = useQueryClient();

    const { session } = useAuthStore();
    const userId = session?.user?.id;

    return useMutation({
        mutationFn : (newData : insertSubscriptionData) => insertSubscription(newData),
        onSuccess : () => {
            queryClient.invalidateQueries({ queryKey : ['subscriptions', userId]});
            toast.success("구독 정보가 성공적으로 추가되었습니다.");
        },
        
        onError : (error : Error) => {
            toast.error(error.message || '구독 추가에 실패했습니다. ');
        }
    })

}