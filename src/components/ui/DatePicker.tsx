import DatePicker from 'react-datepicker';
import styles from '../subscription/AddSubscriptionModal.module.css';
import "react-datepicker/dist/react-datepicker.css";

import { ko } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';

registerLocale('ko',ko)

interface Props  {
    date : Date | null
    onChange : (data : Date | null) => void;
}

export function MyDatePicker({date, onChange} : Props) {

    return (
        <DatePicker 
            className={styles.inputDate}
            selected={date} 
            onChange={ (data : Date | null) => onChange(data)}
            locale="ko"
            dateFormat="yyyy-MM-dd"
        />
    );
}