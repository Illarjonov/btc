import * as React from 'react';

import { type HeadingLevelType } from './types';

import classNames from 'classnames';
import styles from './styles.module.css';
import variants from './variants.module.css';

type Props = {
    level: HeadingLevelType;
    children: React.ReactNode;
    className?: string;
};

const Heading = ({ level, children, className }: Props) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={classNames(styles.heading, variants[`h${level}`], className)} >
            {children}
        </Tag>
    );
};

export default Heading;
