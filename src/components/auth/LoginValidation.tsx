import { useEffect } from "react";
import { supabase } from "../../lib/supabase.ts";
import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "../ui/LoadingScreen.tsx";
import { useAuthStore } from "../../store/useAuthStore.tsx";

export default function LoginValidation() {

    const { session, isAuthLoading, setSession, setAuthLoading } = useAuthStore();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
                setSession(session);
                setAuthLoading(false);
        })
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setAuthLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (isAuthLoading) {
        return <LoadingScreen />
    }

    if (!session) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
}