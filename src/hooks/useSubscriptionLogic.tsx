import { useState } from "react";
import { SUBSCRIPTION_SERVICES } from "../constants/subscriptionData.tsx";
import toast from "react-hot-toast";

export const useSubscriptionLogic = () => {

    const [form, setForm] = useState({
        serviceName: "",
        plan: "",
        price: 0,
        startDate: new Date(),
        endDate: new Date(),
    });


    const changeService = (newServiceId: string) => {
        setForm(prev => ({
            ...prev,
            serviceName: newServiceId,
            plan: "",
            price: 0
        }));
    };


    const changePlan = (newPlanId: string) => {

        const currentService = SUBSCRIPTION_SERVICES.find(s => s.id === form.serviceName);

        const selectedPlan = currentService?.plans.find(p => p.id === newPlanId);

        const newPrice = selectedPlan ? selectedPlan.price : 0;

        setForm(prev => ({
            ...prev,
            plan: newPlanId,
            price: newPrice
        }));
    };


    const changePrice = (inputValue: string) => {

        const onlyNumber = inputValue.replace(/[^0-9]/g, '');

        if (onlyNumber.length > 9) {
            return;
        }

        setForm(prev => ({
            ...prev,
            price: Number(onlyNumber) 
        }));

    };
    const changeDate = (key: 'startDate' | 'endDate', date: Date) => {
        setForm(prev => ({ ...prev, [key]: date }));
    }


    const currentServiceData = SUBSCRIPTION_SERVICES.find(s => s.id === form.serviceName);


    const currentPlanOptions = currentServiceData?.plans.map(p => ({
        value: p.id,
        label: `${p.name} (${p.price.toLocaleString()}원)`
    })) || [];
    
    const validateForm = () => {
        if(!form.serviceName) {
            toast.error("서비스를 선택해주세요.");
            return false
        }
        if(!form.plan) {
            toast.error("플랜을 선택해주세요.");
            return false
        }
        if(form.price < 0) {
            toast.error("가격을 다시 확인해주세요.");
            return false
        }
        if(form.startDate >= form.endDate) {
            toast.error("갱신일은 시작일 이후여야 합니다. ");
            return false
        }
        return true
    }

    return {
        form,
        changeService,
        changePlan,
        changePrice,
        changeDate,
        currentPlanOptions,
        validateForm,
    };
};