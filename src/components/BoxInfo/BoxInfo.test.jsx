import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import BoxInfo from './BoxInfo'

test('Box Info render', async () => {
    const {findByRole} = render(<BoxInfo turn='Alejo'/>);

    const button = await findByRole('button');
    const text = await findByRole('heading');

    expect(button).toBeInTheDocument();
    expect(text).toHaveTextContent('Playing: Alejo');
})