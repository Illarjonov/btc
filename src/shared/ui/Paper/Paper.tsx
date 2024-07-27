import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Paper = ({ children, className }: Props) => {
    return (
        <div className={classNames(styles.paper, className)}>{children}</div>
    );
};

export default Paper;
