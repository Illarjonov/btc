import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        //можно переписать на web workers, чтобы интервал отрабатывал четко по времени
        const id = setInterval(() => savedCallback.current && savedCallback.current(), delay);
        return () => {
            clearInterval(id);
        };
    }, [delay]);
};

export default useInterval;