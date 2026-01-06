import { NextResponse } from 'next/server';
import { generateTelemetry } from '@/lib/telemetry';

export async function GET() {
    const telemetryData = {
        'res-001': {
            pressure: generateTelemetry(100, 5),
            flow: generateTelemetry(50, 2),
            level: generateTelemetry(80, 1),
        },
        'pump-001': {
            pressure: generateTelemetry(120, 5),
            flow: generateTelemetry(60, 2),
            status: Math.random() > 0.1 ? 'Running' : 'Stopped',
        },
        'tank-001': {
            level: generateTelemetry(45, 5),
        }
    };

    return NextResponse.json(telemetryData);
}
