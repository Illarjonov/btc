import React from 'react';

import styles from './styles.module.css';
import Container from 'shared/ui/Container';
import Header from 'components/Header';

type Props = {
    children: React.ReactNode;
}
const Layout = ({ children }: Props) => {

    return (
        <Container className={styles.container}>
            <Header />
            <div className={styles.contentBox}>
                {children}
            </div>
        </Container>
    );
};

export default Layout;