import { useState } from "react";
import styles from './SortButton.module.css'
import { ChevronDown, TreePalm } from "lucide-react";

type Props = {
    currentType: string,
    onChange: (type: string) => void;
}

const SORT_OPTIONS = ["가격순", "등록순", "결제일순"];

export default function SortButton({ currentType, onChange }: Props) {

    const [isOpen, setIsOpen] = useState(false);
    const handleSelect = (type :string) => {
        onChange(type)
        setIsOpen(false);
    }

    return (
        <div className={styles.container}>
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
            >
                {currentType}
                <ChevronDown size={16}/>
            </button>

            {isOpen && (
                <ul className={styles.menu}>
                    {SORT_OPTIONS.filter( t => t !== currentType).map((type) => (
                        <li 
                            key={type}
                            className={styles.item}
                            onClick={() => handleSelect(type)}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}