import React from 'react';

import Text from 'shared/ui/Text';
import { LIST_STYLES } from './types';

import styles from './styles.module.css';

type Props = {
    children: Array<React.ReactNode> | React.ReactNode;
    style: LIST_STYLES;
};

const List = ({ children, style }: Props) => {
    const modifiedChildren = React.Children.map(children, (child, index) => {
        return (
            <li key={index}>
                <Text>
                    {React.cloneElement(child as React.ReactElement)}
                </Text>
            </li>
        );
    });

    if (style === LIST_STYLES.ordered) {
        return (
            <ol className={styles.list}>{modifiedChildren}</ol>
        );
    }
    return (
        <ul className={styles.list}>{modifiedChildren}</ul>
    );
};

export default List;