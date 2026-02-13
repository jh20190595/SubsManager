import Select from 'react-select';
import styles from './ServiceSelect.module.css'; 

export interface SelectOption {
    value: string;
    label: string;
}

interface Props {
    value: string;
    onChange: (value: string) => void; 
    options: SelectOption[]; 
    placeholder?: string;
}

export default function CustomSelect({ value, onChange, options, placeholder }: Props) {
    
    const selectedOption = options.find(opt => opt.value === value);

    return (
        <Select
            className={styles.ServiceList}
            options={options}
            value={selectedOption} 
            placeholder={placeholder}
            onChange={opt => {
                onChange(opt?.value || "");
            }}
        />
    )
}