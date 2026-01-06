import { renderHook, act } from '@testing-library/react';
import { useInterval } from '@/hooks/useInterval';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('useInterval', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should call callback after delay', () => {
        const callback = vi.fn();
        renderHook(() => useInterval(callback, 1000));

        expect(callback).not.toHaveBeenCalled();

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should pause when delay is null', () => {
        const callback = vi.fn();
        renderHook(() => useInterval(callback, null));

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        expect(callback).not.toHaveBeenCalled();
    });

    it('should update callback when it changes', () => {
        const callback1 = vi.fn();
        const callback2 = vi.fn();
        const { rerender } = renderHook(({ cb, delay }) => useInterval(cb, delay), {
            initialProps: { cb: callback1, delay: 1000 },
        });

        act(() => {
            vi.advanceTimersByTime(1000);
        });
        expect(callback1).toHaveBeenCalledTimes(1);

        rerender({ cb: callback2, delay: 1000 });

        act(() => {
            vi.advanceTimersByTime(1000);
        });
        expect(callback2).toHaveBeenCalledTimes(1);
        expect(callback1).toHaveBeenCalledTimes(1);
    });
});
