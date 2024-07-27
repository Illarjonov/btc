import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

type Props = {
    className?: string;
    children: React.ReactNode;
}
const Container = ({ children, className }: Props) => {
    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    );
};

export default Container;