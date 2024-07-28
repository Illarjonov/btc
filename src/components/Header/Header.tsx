import React from 'react';

import GridContainer from 'shared/ui/GridContainer';
import GridItem from 'shared/ui/GridItem';
import Text, { TEXT_VARIANTS } from 'shared/ui/Text';
import { useAuthContext } from 'contexts/AuthContext';
import Button, { BUTTON_SIZES, BUTTON_VARIANTS } from 'shared/ui/Button';

import styles from './styles.module.css';

const Header = () => {
    const { user, logout } = useAuthContext();
    return (
        <GridContainer className={styles.header}>
            <GridItem span={6} alignX="left" alignY="center" className={styles.headerUserWrap}>
                <Text variant={TEXT_VARIANTS.bodyMedium} tag={'span'}>
                    Добрый день, {user?.name}
                </Text>
            </GridItem>
            <GridItem span={6} alignX="right" alignY="center" className={styles.headerLogoWrap}>
                <Button text={'Выйти'} variant={BUTTON_VARIANTS.primary} onClick={logout} size={BUTTON_SIZES.medium} />
            </GridItem>
        </GridContainer>
    );
};

export default Header; 
