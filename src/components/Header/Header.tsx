import React from 'react';

import GridContainer from 'shared/ui/GridContainer';
import GridItem from 'shared/ui/GridItem';
import Chip from 'shared/ui/Chip';
import Text, { TEXT_VARIANTS } from 'shared/ui/Text';


import styles from './styles.module.css';
import { useAuthContext } from 'contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();
    return (
        <GridContainer className={styles.header}>
            <GridItem span={12} alignX="right" alignY="center" className={styles.headerUserWrap}>
                <Chip>
                    <Text variant={TEXT_VARIANTS.bodyMedium}>
                        {user?.name}
                    </Text>
                </Chip>
            </GridItem>
        </GridContainer>
    );
};

export default Header; 
