import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase.ts";
import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "../ui/LoadingScreen.tsx";

export default function LoginValidation() {
    const [session, setSession] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        supabase.auth.getSession().then(({ data: { session } }) => {
                setSession(session);
                setLoading(false);
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) {
        return <LoadingScreen />
    }

    if (!session) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
}