import React from 'react';

import styles from './styles.module.css';
import Container from 'shared/ui/Container';
import Header from 'components/Header';
import { useAuthContext } from 'contexts/AuthContext';

type Props = {
    children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
    const { user } = useAuthContext();
    const header = user && <Header />;

    return (
        <Container className={styles.container}>
            {header}
            <div className={styles.contentBox}>
                {children}
            </div>
        </Container>
    );
};

export default Layout;