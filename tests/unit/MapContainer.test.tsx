import { render, screen } from '@testing-library/react';
import MapContainer from '@/components/MapContainer';
import { describe, it, expect, vi } from 'vitest';

describe('MapContainer', () => {
    it('renders the React Flow wrapper', () => {
        // We render the component
        const { container } = render(<MapContainer />);

        // Check if the wrapper div with the correct class exists
        const wrapper = container.querySelector('.react-flow-wrapper');
        expect(wrapper).toBeTruthy();
    });
});
