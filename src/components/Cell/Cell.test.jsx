import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cell from './Cell'



test('No visible cell render', async () => {
    const { findByText } = render(<Cell />);
    
    const text = await findByText('-');

    expect(text).toBeDefined;
})

test('Visible water cell render', async () => {
    const { findByText } = render(<Cell />);

    const text = await findByText('water');
    
    expect(text).toBeDefined;
})