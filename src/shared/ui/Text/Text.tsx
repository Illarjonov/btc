import React from 'react';
import {
    TEXT_COLORS,
    TEXT_VARIANTS,
} from 'shared/ui/Text/types';

import classNames from 'classnames';
import styles from './styles.module.css';
import variants from './variants.module.css';

type Props = {
    children: React.ReactNode;
    color?: TEXT_COLORS;
    tag?: any; //@todo: fix type
    variant?: TEXT_VARIANTS;
    className?: string;
};

const Text = ({
    children,
    color = TEXT_COLORS.primary,
    tag = 'p',
    variant = TEXT_VARIANTS.bodyBig,
    className,
}: Props) => {
    const Tag = tag;
    return (
        <Tag
            variant={variant}
            component={tag}
            className={classNames(
                styles.text,
                styles[color],
                variants[variant],
                className
            )}
        >
            {children}
        </Tag>
    );
};

export default Text;
