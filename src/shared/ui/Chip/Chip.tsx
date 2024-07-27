import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

type Props = {
   children: React.ReactNode;
   className?: string;
}

const Chip = ({ children, className }: Props) => {
    return (
        <div className={classNames(styles.chip, className)}>{children}</div>
    );
};
export default Chip;