import { useEffect, useRef } from 'react';

/**
 * Custom hook that sets up an interval to perform a task.
 * 
 * @param callback The function to be called at every interval.
 * @param delay The time in milliseconds between each callback execution. Pass null to pause.
 */
export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef<() => void>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
