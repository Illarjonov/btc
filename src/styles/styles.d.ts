//не захотел мучиться с webpack с лоадерами, оставил так
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.css';