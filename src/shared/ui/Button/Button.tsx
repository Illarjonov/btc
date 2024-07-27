import React from 'react';

import Text, { TEXT_COLORS, TEXT_VARIANTS } from '../Text';

import {
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './types';

import classNames from 'classnames';
import styles from './styles.module.css';

const BUTTON_DEFAULT_PARAMS = {
    [BUTTON_SIZES.large]: {
        textStyle: TEXT_VARIANTS.subtitleBig,
    },
    [BUTTON_SIZES.medium]: {
        textStyle: TEXT_VARIANTS.small,
    },
    [BUTTON_SIZES.small]: {
        textStyle: TEXT_VARIANTS.little,
    },
};

type Props = {
    text: string;
    variant: BUTTON_VARIANTS;
    size: BUTTON_SIZES;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    href?: string;
    isDisabled?: boolean;
    className?: string;
};

export const Button = ({
    text,
    variant = BUTTON_VARIANTS.primary,
    size = BUTTON_SIZES.medium,
    onClick,
    isDisabled,
    className,
}: Props) => {
    const { textStyle } = BUTTON_DEFAULT_PARAMS[size];

    const buttonContent = (
        <Text
            variant={textStyle}
            color={TEXT_COLORS.inherit}
            className={styles.text}
        >
            {text}
        </Text>
    );

    const buttonStyle = {
        className: classNames(
            styles.button,
            styles[variant],
            styles[size],
            { [styles.disabled]: isDisabled },
            className
        ),
    };

    return (
        <button onClick={onClick} disabled={isDisabled} {...buttonStyle}>
            {buttonContent}
        </button>
    );
};

export default Button;
