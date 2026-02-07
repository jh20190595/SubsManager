import { SupabaseClient } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase.ts'
import axios from 'axios'

export const fetchSubscriptionList = async () => {
    const { data, error } = await supabase
        .from('subscription')
        .select('*')
        .order('created_at', { ascending : true}) // 구독 추가 순
    if (error) {
        console.error('에러 발생 :', error);
        return [];
    } else {
        console.log("데이터 성공 : ", data)
        return data;
    }
}