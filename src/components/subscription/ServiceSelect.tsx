import Select from 'react-select';
import { SUBSCRIPTION_SERVICES } from '../../constants/subscriptionData.tsx';

type Props = {
    value : string;
    onchange : () => void;
}

export default function ServiceSelect({value, onChange} : Props) {

    const options = SUBSCRIPTION_SERVICES.map( item => ({
        value : item.id,
        label : item.name
    }))

    const currentOption = options.find( opt => opt.value === value);

    return (
        <Select
            options={options}
            placeholder="구독 중인 서비스를 검색하세요"
            onChange={ opt => onChange(opt?.value || "")}
        />
    )
}