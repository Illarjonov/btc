import * as React from 'react';
import { default as MuiAvatar } from '@mui/material/Avatar';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Avatar' {
    interface AvatarPropsVariantOverrides {
        default: true;
    }
}

type Props = {
    name: string;
    src?: string;
    variant?: 'default';
    size?: number;
};

const Avatar = ({ name, src, variant = 'default', size }: Props) => {

    const theme = createTheme({
        components: {
            MuiAvatar: {
                variants: [
                    {
                        props: { variant: 'default' },
                        style: {
                            bgcolor: 'gray',
                            height: size ? size : 32,
                            width: size ? size : 32
                        },
                    }
                ]
            }
        }
    });
    const nameFirstChar = name.charAt(0);

    return (
        <ThemeProvider theme={theme}>
            <MuiAvatar src={src} alt={name} variant={variant}>{nameFirstChar}</MuiAvatar>
        </ThemeProvider>
    );
};

export default Avatar;
