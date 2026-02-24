import { SUBSCRIPTION_SERVICES } from "../../constants/subscriptionData.tsx";
import { useSubscriptions } from "../../hooks/useSubscriptions.tsx"
import styles from './DetailsComponent.module.css';
import { useEffect } from "react";
export default function DetailsComponent() {

    const { data: subscriptions } = useSubscriptions();


    useEffect(() => {
        SUBSCRIPTION_SERVICES.forEach((service) => {
            const img = new Image();
            img.src = service.logoUrl;
        });
    }, []);

    return (
        <div className={styles.container}>
            <h2>하이</h2>
            
            <ul className={styles.ListWrap}>
                {subscriptions.map((item, index) => {
                    const serviceLogoUrl = SUBSCRIPTION_SERVICES.find(f => f.id === item.service_name)?.logoUrl
                    return (
                        <li key={item.id}>
                            <div><img src={serviceLogoUrl} style={{ width: '20px', height: '20px', borderRadius: '30%' }} /></div>
                            <div>{item.service_name}</div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}