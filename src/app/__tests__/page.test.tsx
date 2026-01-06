import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
    it('renders the map container', () => {
        const { container } = render(<Home />)
        const wrapper = container.querySelector('.react-flow-wrapper')
        expect(wrapper).toBeTruthy()
    })
})
