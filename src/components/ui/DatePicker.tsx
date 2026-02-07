import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    startDate = Date | null;
    onChange = () => void;
}

export function MyDatePicker({startDate, onChange} : Props) {

    return (
        <DatePicker 
            selected={startDate} 
            onChange={ (data) => onChange(data)}
            locale="ko"
            dateFormat="yyyy-MM-dd"
        />
    );
}