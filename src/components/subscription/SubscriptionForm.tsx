import { useState } from 'react';

import { useSubscriptionLogic } from '../../hooks/useSubscriptionLogic.tsx';
import { useAddSubscription } from '../../hooks/useAddSubscription.tsx';

import CustomSelect from './ServiceSelect.tsx';
import OptionSelect from './OptionSelect.tsx';
import { MyDatePicker } from '../ui/DatePicker.tsx';
import styles from './SubscriptionForm.module.css';
import { SUBSCRIPTION_SERVICES } from '../../constants/subscriptionData.tsx';
import toast from 'react-hot-toast';
import { PAYMENT_DETAIL_OPTIONS } from '../../constants/paymentOptions.tsx';

const payment_Type = [
    { id: 'CREDIT_CARD', label: '카드' },
    { id: 'E_WALLET', label: '간편결제' },
    { id: 'ETC', label: '기타' },
]

export default function SubscriptionForm() {

    const [selectPayment, setSelectPayment] = useState<string>('CREDIT_CARD');
    const initialPaymentOption = PAYMENT_DETAIL_OPTIONS[selectPayment] || [];
    const [currentPaymentOptions, setCurrentPaymentOptions] = useState(initialPaymentOption)

    const { mutate, isPending } = useAddSubscription();

    const handleChangePaymentOptions = (selectPayment : string) => {
        const currentPaymentOptions = PAYMENT_DETAIL_OPTIONS[selectPayment];
        setCurrentPaymentOptions(currentPaymentOptions);
    }

    const {
        form,
        changeService,
        changePlan,
        changePrice,
        changeMemo,
        changeDate,
        changePayment,
        changePaymentName,
        currentPlanOptions,
        validateForm,
        reset,
    } = useSubscriptionLogic();

    const serviceOptions = SUBSCRIPTION_SERVICES.map(item => ({
        value: item.id,
        label: item.name
    }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validResult = validateForm(form);

        if (validResult) {
            mutate(form, {
                onSuccess: () => {
                    console.log("구독이 추가되었습니다.");
                    reset();  
                }
            })
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>서비스명</div>
                <OptionSelect
                    value={form.service_name}
                    options={serviceOptions}
                    placeholder="서비스를 선택하세요"
                    onSelect={changeService}

                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>카테고리</div>
                <input
                    value={form.category}
                    disabled={true}
                    className={styles.input}
                />
            </div>
            <div className={styles.inputWrap}>
                <div className={styles.inputName}>플랜</div>
                <OptionSelect
                    value={form.plan_name}
                    options={currentPlanOptions}
                    placeholder="요금제를 선택하세요"
                    onSelect={changePlan}
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>가격</div>
                <input
                    className={styles.input}
                    value={form.price === 0 ? "" : form.price.toLocaleString()}
                    onChange={(e) => changePrice(e.target.value)}
                    placeholder="금액 입력"
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>메모</div>
                <textarea
                    className={styles.input}
                    value={form.memo}
                    onChange={(e) => changeMemo(e.target.value)}
                    placeholder='메모를 입력하세요(선택 사항)'
                />
            </div>
            <div className={styles.inputWrap}>
                <div className={styles.inputName}>시작일</div>
                <MyDatePicker
                    date={form.start_date}
                    onChange={(date) => changeDate('start_date', date)}
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>갱신일</div>
                <MyDatePicker
                    date={form.next_billing_date}
                    onChange={(date) => changeDate('next_billing_date', date)}
                />
            </div>

            <div className={styles.inputWrap}>
                <div className={styles.inputName}>결제수단</div>
                <div className={styles.paymentMenu}>
                    {payment_Type.map((item, index) => (
                        <button
                            type='button'
                            className={form.payment_type === item.label ? styles.activeBtn : styles.defaultBtn}
                            onClick={() => { setSelectPayment(item.id); changePayment(item.label); handleChangePaymentOptions(item.id) }}
                        >
                            {item.label === "카드" ? "신용/체크카드" : item.label}
                        </button>
                    ))}
                </div>

                <div className={styles.inputWrap}>
                    <div className={styles.inputName}>
                        {selectPayment === 'CREDIT_CARD'
                            ? <p>카드 정보</p>
                            : selectPayment === 'E_WALLET' ? <p>간편결제 종류</p> : <p>기타 결제수단</p>
                        }
                    </div>

                    <OptionSelect
                        value={form.payment_name}
                        options = {currentPaymentOptions} 
                        placeholder={selectPayment === "CREDIT_CARD" ? "카드사를 선택해주세요" : selectPayment === "E_WALLET" ? "간편결제를 선택해주세요" : "상세수단을 선택해주세요"}
                        onSelect={changePaymentName}
                    />
                </div>
            </div>

            <div className={styles.addBtnWrap}>
                <button className={styles.addBtn} disabled={isPending} onClick={handleSubmit}>추가</button>
            </div>
        </div>
    )
}