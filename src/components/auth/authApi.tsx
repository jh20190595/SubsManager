import { supabase } from "../../lib/supabase.ts";

export const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider : 'google',
        options : {
            redirectTo : window.location.origin + '/dashboard',
            queryParams : {
                access_type : 'offline',
                prompt : 'consent',
            }
        }
    })

    if(error) throw error;

    return data
}