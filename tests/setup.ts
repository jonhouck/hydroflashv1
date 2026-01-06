import { vi } from 'vitest';

// Mock ResizeObserver globally
global.ResizeObserver = class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
};
