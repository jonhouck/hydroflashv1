export function generateTelemetry(baseValue: number, variance: number): number {
    const rawValue = baseValue + (Math.random() * variance * 2 - variance);
    return Number(rawValue.toFixed(2));
}
