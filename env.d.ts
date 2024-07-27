interface Env {
    REACT_APP_BASE_URL: string;
}

declare const process: {
    env: Env;
};