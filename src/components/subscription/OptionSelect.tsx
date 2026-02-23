import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';
import styles from './OptionSelect.module.css';

export interface SelectOptions {
    value : string;
    label : string;
}

interface PaySelectProps { 
    value: string;
    options : SelectOptions[];
    placeholder: string;
    onSelect: (value: string) => void;
}

export default function OptionSelect({value, options,placeholder, onSelect }: PaySelectProps) {

    return (
        <Select.Root value={value} onValueChange={onSelect}>
            <Select.Trigger className={styles.SelectTrigger}>
                <Select.Value placeholder={placeholder} />
                <Select.Icon className={styles.SelectIcon}>
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content className={styles.SelectContent} position="popper" sideOffset={5}>
                    <Select.Viewport className={styles.SelectViewport}>
                        {options.map((method) => (
                            <Select.Item
                                key={method.value}
                                value={method.value}
                                className={styles.SelectItem}
                            >
                                <Select.ItemText>{method.label}</Select.ItemText>
                                <Select.ItemIndicator className={styles.SelectItemIndicator}>
                                    <CheckIcon />
                                </Select.ItemIndicator>
                            </Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}