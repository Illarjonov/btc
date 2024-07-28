import { useAuthContext } from 'contexts/AuthContext';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PAGES } from 'shared/configs/pages';
import Button, { BUTTON_SIZES, BUTTON_VARIANTS } from 'shared/ui/Button';
import GridContainer from 'shared/ui/GridContainer';
import GridItem from 'shared/ui/GridItem';
import Input from 'shared/ui/Input';
import { TEXT_VARIANTS } from 'shared/ui/Text';
import Paper from 'shared/ui/Paper';

import styles from './styles.module.css';

type LoginFormValues = {
    login: string;
    name: string;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const { user, login } = useAuthContext();

    const [formValues, setFormValues] = useState<LoginFormValues>({
        login: '',
        name: '',
    });

    useEffect(() => {
        if (!user) return;

        navigate(PAGES.home);
    }, [user]);

    const handleChange = (name: string, value: string) => {
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleChangeLogin = (value: string) => handleChange('login', value);
    const handleChangeName = (value: string) => handleChange('name', value);

    const handleLogin = () => {
        login({ login: formValues.login, name: formValues.name });
        navigate(PAGES.home);
    };

    const isDisabledButton = useMemo(() => {
        return !formValues.login || !formValues.name;
    }, [formValues]);

    return (
        <GridContainer className={styles.container}>
            <GridItem span={12} alignX="center" alignY="center">
                <Paper className={styles.loginForm}>
                    <Input placeholder={'Логин'} variant={TEXT_VARIANTS.bodyBig} value={formValues.login} onChange={handleChangeLogin} />
                    <Input placeholder={'Имя пользователя'} variant={TEXT_VARIANTS.bodyBig} value={formValues.name} onChange={handleChangeName} />

                    <Button text={'Войти'} variant={BUTTON_VARIANTS.primary} onClick={handleLogin} size={BUTTON_SIZES.medium} isDisabled={isDisabledButton} />
                </Paper>
            </GridItem>
        </GridContainer>
    );
};

export default LoginPage;