import React, { useCallback, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { HEADING_TYPES } from './types';
import textVariants from 'shared/ui/Text/variants.module.css';
import headingVariants from 'shared/ui/Heading/variants.module.css';
import { TEXT_VARIANTS } from '../Text';

import style from './styles.module.css';


type Props = {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
    onBlur?: (value: string) => void;
    isAutofocused?: boolean;
    variant: TEXT_VARIANTS | HEADING_TYPES;
    className?: string;
};

const variants = { ...headingVariants, ...textVariants };

const Input = ({
    value,
    placeholder,
    onChange,
    isAutofocused = false,
    variant,
    className
}: Props) => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }, [onChange]);


    useEffect(() => {
        if (isAutofocused) {
            inputRef.current?.focus();
        }
    }, [isAutofocused]);

    return (
        <input
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            className={classNames(style.input, variants[variant], className)} />
    );
};

export default Input;