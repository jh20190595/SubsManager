import styles from './LoginButton.module.css';
import toast from "react-hot-toast";
import { signInWithGoogle } from "./authApi.tsx"
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
    children : ReactNode
    type : number
}

export default function GoogleLoginButton({children, type} : Props) {

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log("로그인 실퍠 :", error)
            toast.error("로그인에 실패했습니다. 다시 시도해주세요.")
        }
    }

    return (
        <button 
            className={ type === 1 ? `${styles.btn1} ${styles.btnPrimary} ${styles.headerBtn}`: ` ${styles.btn2} ${styles.btnPrimary} ${styles.headerBtn}` }
            onClick={handleLogin}>
            {children}
            <ArrowRight size={16} />
        </button>
        
    )
}
