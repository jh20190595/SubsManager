import { create } from 'zustand'
import { fetchSubscriptionList } from '../api/subscriptionApi.tsx';
import { fi } from 'date-fns/locale';

interface Subscription {
    id: number;
    user_id?: number;
    service_Name: string;
    plan_name: string;
    price: number;
    category: string;
    start_date: Date;
    next_billing_date: Date;
    cycle?: string;
    memo?: string;
    create_at: Date;
    extra_fee?: number;
}

interface SubscriptionState {
    subscriptions: Subscription[];
    isLoading: boolean;
    error: string | null;
    fetchSubscriptions: () => Promise<void>;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({

    subscriptions : [],
    isLoading : false,
    error : null,

    fetchSubscriptions : async () => {
        set({ isLoading : true, error : null})
        try {
            const data = await fetchSubscriptionList();
            set({ subscriptions : (data as Subscription[] || null) })
        } catch(error) {
            console.error(error)
            set({ error : '데이터를 불러오는데 실패했습니다.'})
        } finally {
            set({ isLoading : false})
        }
    }

}))