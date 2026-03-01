import { SUBSCRIPTION_SERVICES } from '../../constants/subscriptionData.tsx';
import styles from './SubscriptionList.module.css';

export default function SubscriptionList({data}: Props) {

    return (
        <div className={styles.container}>
            <ul className={styles.listWrap}>
            {data?.map(item => {
                
                const serviceLogoUrl = SUBSCRIPTION_SERVICES.find( f => f.service_name.toLowerCase() === item.service_name.toLowerCase())?.logoUrl

                return (
                    <li className={styles.listItem}>
                        <div className={styles.listImg}>
                        <img src={serviceLogoUrl} style={{ width : '40px', height : '40px', borderRadius : '30%', objectFit : 'contain'}}/>
                        </div>

                        <div>
                        <p>{item.service_name}</p>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}