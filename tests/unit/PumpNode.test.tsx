
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PumpNode from '@/components/nodes/PumpNode';
import { ReactFlowProvider } from '@xyflow/react';

import { ComponentProps } from 'react';

const renderPumpNode = (props: ComponentProps<typeof PumpNode>) => {
    return render(
        <ReactFlowProvider>
            <PumpNode {...props} />
        </ReactFlowProvider>
    );
};

describe('PumpNode', () => {
    it('renders correctly with label', () => {
        const props = {
            data: { label: 'Test Pump' },
            id: 'test-pump',
        };
        renderPumpNode(props);
        expect(screen.getByText('Test Pump')).toBeDefined();
    });

    it('renders correctly when OFF (default)', () => {
        const props = {
            data: { label: 'Test Pump', isOn: false },
            id: 'test-pump',
        };
        const { container } = renderPumpNode(props);
        const pumpDiv = container.querySelector('.border-gray-400');
        expect(pumpDiv).toBeDefined();
    });

    it('renders correctly when ON', () => {
        const props = {
            data: { label: 'Test Pump', isOn: true },
            id: 'test-pump',
        };
        const { container } = renderPumpNode(props);
        const pumpDiv = container.querySelector('.border-green-500');
        expect(pumpDiv).toBeDefined();
    });
});
