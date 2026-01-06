import { render } from '@testing-library/react';
import ReservoirNode from '../../src/components/nodes/ReservoirNode';
import PumpNode from '../../src/components/nodes/PumpNode';
import TankNode from '../../src/components/nodes/TankNode';
import JunctionNode from '../../src/components/nodes/JunctionNode';
import { ReactFlowProvider } from '@xyflow/react';
import { describe, it, expect } from 'vitest';

// Wrapper for ReactFlow components
const FlowWrapper = ({ children }: { children: React.ReactNode }) => {
    return <ReactFlowProvider>{children}</ReactFlowProvider>;
};

describe('Custom Nodes', () => {
    it('ReservoirNode renders correctly', () => {
        const { container } = render(
            <FlowWrapper>
                <ReservoirNode data={{ label: 'Source' }} />
            </FlowWrapper>
        );
        expect(container.textContent).toContain('Source');
        // Check for specific styling class or element if needed
        expect(container.getElementsByClassName('border-t-blue-500').length).toBe(1);
    });

    it('PumpNode renders correctly', () => {
        const { container } = render(
            <FlowWrapper>
                <PumpNode data={{ label: 'Main Pump' }} />
            </FlowWrapper>
        );
        expect(container.textContent).toContain('Main Pump');
        expect(container.getElementsByClassName('rounded-full').length).toBeGreaterThan(0);
    });

    it('TankNode renders correctly with level', () => {
        const { container } = render(
            <FlowWrapper>
                <TankNode data={{ label: 'Tank A', level: 75 }} />
            </FlowWrapper>
        );
        expect(container.textContent).toContain('Tank A');
        expect(container.textContent).toContain('75%');
    });

    it('JunctionNode renders correctly', () => {
        const { container } = render(
            <FlowWrapper>
                <JunctionNode data={{ label: 'Junction' }} />
            </FlowWrapper>
        );
        // Junction might not display label, but should have specific class
        expect(container.getElementsByClassName('bg-gray-800').length).toBe(1);
    });
});
