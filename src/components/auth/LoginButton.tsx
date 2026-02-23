import styles from './LoginButton.module.css';
import toast from "react-hot-toast";
import { signInWithGoogle,signinWithKaKao } from "./authApi.tsx"
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { RiKakaoTalkFill, RiGoogleFill } from 'react-icons/ri';

type Props = {
    children: ReactNode
    type: number
}

export default function LoginButton({ children, type }: Props) {

    const [showLoginModal, setShowLoginModal] = useState(false);

    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log("로그인 실퍠 :", error)
            toast.error("로그인에 실패했습니다. 다시 시도해주세요.")
        }
    }
    const handleKakaoLogin = async () => {
        try {
            await signinWithKaKao();
        } catch (error) {
            console.log("로그인 실퍠 :", error)
            toast.error("로그인에 실패했습니다. 다시 시도해주세요.")
        }
    }


    const handleOpenModal = () => {
        setShowLoginModal(true);
    }

    const handleCloseModal = () => {
        setShowLoginModal(false);
    }

    return (
        <div>
            <button
                className={type === 1 ? `${styles.btn1} ${styles.btnPrimary} ${styles.headerBtn}` : ` ${styles.btn2} ${styles.btnPrimary} ${styles.headerBtn}`}
                onClick={handleOpenModal}>
                {children}
                <ArrowRight size={16} />
            </button>

            {showLoginModal && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <button onClick={handleCloseModal}>x</button>
                        <button onClick={handleKakaoLogin}><RiKakaoTalkFill size={11} color='yellow' />kakao</button>
                        <button onClick={handleGoogleLogin}><RiGoogleFill size={11} color='#999' />google</button>
                    </div>
                </div>
            )}
        </div>
    )
}
